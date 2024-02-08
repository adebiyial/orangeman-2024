import urlMetadata from "url-metadata";
import type { BooksJsonRes, IMyBooks } from "./types";

const token = import.meta.env.PUBLIC_LITERAL_ACCESS_TOKEN;
const profileId = import.meta.env.PUBLIC_LITERAL_PROFILE_ID;
const endpoint = "https://literal.club/graphql";

export const slugify = (text: string | number) =>
  String(text)
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("/", "")
    .replaceAll(".", "");

export function getIdFromUrl(url: string) {
  return new URL(url).hostname.replace(/^www\.|\.com$/g, "");
}

export function getPathnames(pathname: string) {
  const pathnames = pathname === "/" ? [""] : pathname.split("/");
  pathnames.splice(0, 1, pathnames.length === 1 ? "" : "Index");
  return pathnames.filter(String);
}

export function concatAuthors(array: Array<string>) {
  if (array.length === 0) {
    return "";
  } else if (array.length === 1) {
    return array[0];
  } else if (array.length === 2) {
    return array.join(" and ");
  } else {
    let last = array.pop();
    return array.join(", ") + ", and " + last;
  }
}

export async function getMetatags(urls: Array<string>) {
  try {
    const metadata = (url: string) =>
      urlMetadata(url, {
        mode: "cors",
        includeResponseBody: false,
      });
    const resArray = await Promise.all(urls.map((url) => metadata(url)));

    const articles: Array<Record<string, string>> = resArray.map((res) => {
      return {
        title: String(res["og:title"] || res.title),
        description: String(res["og:description"] || res.description),
        imageUrl: String(res["og:image"]),
        url: String(res["og:url"] || res["canonical"] || res["url"]),
        date: String(res["article:published_time"]),
        source:
          String(res["og:site_name"]) ||
          new URL(String(res["og:url"] || res["canonical"] || res["url"]))
            .hostname,
      };
    });

    return articles;
  } catch (error) {
    throw new Error("Error fetching link meta tags.");
  }
}

export function formatDate(date: string, options?: Intl.DateTimeFormatOptions) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  });
}

export async function fetchBooks(): Promise<Array<IMyBooks>> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
      query myBooks {
        myBooks {
          id
          slug
          title
          cover
          authors {
            name
          }
        }
      }
    `,
    }),
  };

  const response = await fetch(endpoint, options);
  const json: BooksJsonRes = await response.json();

  return json.data.myBooks;
}

export async function fetchBooksByReadingStateAndProfile(): Promise<
  Array<IMyBooks>
> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
        query booksByReadingStateAndProfile($limit: Int!, $offset: Int!, $readingStatus: ReadingStatus!, $profileId: String!) {
          booksByReadingStateAndProfile(limit: $limit, offset: $offset, readingStatus: $readingStatus, profileId: $profileId) {
            id
            slug
            title
            cover
            authors {
              name
            }
          }
        }
      `,
      variables: {
        limit: 6,
        offset: 0,
        readingStatus: "FINISHED",
        profileId: profileId,
      },
    }),
  };

  const response = await fetch(endpoint, options);
  const json: BooksJsonRes = await response.json();

  return json.data.booksByReadingStateAndProfile;
}
