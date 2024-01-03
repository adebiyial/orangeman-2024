export const slugify = (text: string) => text.toLowerCase().replace(" ", "-");

type Tarray = { [key: string]: string };
export function groupBy(array: Array<Tarray>, key: keyof Tarray) {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {} as { [key: string]: Array<Tarray> });
}
