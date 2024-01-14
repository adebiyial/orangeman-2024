export type TCard = Array<{
  title: string;
  subtitle: string;
  isExternal?: boolean;
  url?: string;
}>;

export interface BooksJsonRes {
  data: {
    [key: string]: Array<IMyBooks>;
  };
}

export interface IMyBooks {
  id: string;
  slug: string;
  title: string;
  cover: string;
  authors: Array<{
    name: string;
  }>;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  publishedOn: string;
  canonicalUrl: string;
  url: string;
}
