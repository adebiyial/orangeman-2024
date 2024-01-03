export interface ISectionGrid {
  heading: string;
  subheading?: string;
  gridItems: Array<{
    isExternal?: boolean;
    title: string;
    subtitle: string;
  }>;
}
