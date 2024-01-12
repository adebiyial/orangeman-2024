export const slugify = (text: string | number) =>
  String(text)
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("/", "")
    .replaceAll(".", "");

type Tarray = { [key: string]: string };
export function groupBy(array: Array<Tarray>, key: keyof Tarray) {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {} as { [key: string]: Array<Tarray> });
}

export function getIdFromUrl(url: string) {
  return new URL(url).hostname.replace(/^www\.|\.com$/g, "");
}

export function getPathnames(pathname: string) {
  const pathnames = pathname === "/" ? [""] : pathname.split("/");
  pathnames.splice(0, 1, pathnames.length === 1 ? "" : "Index");

  return pathnames;
}
