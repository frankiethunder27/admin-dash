import { ReactNode } from "react";

export type DirectoryItem = {
  id: number | string;
  name: string;
  description: string;
  image: string;
  url: string;
  [key: string]: unknown;
};

export type FilterGroup = {
  key: string;
  title: string;
  options: string[];
};

export type DirectoryConfig = {
  title: string;
  subtitle: string | ReactNode;
  searchPlaceholder?: string;
  emptyStateTitle?: string;
  emptyStateMessage?: string;
  actionLabel?: string;
  itemsPerPage?: number;
  columns?: 2 | 3 | 4;
};

export type DirectoryCardRenderer<T extends DirectoryItem = DirectoryItem> = (
  item: T,
) => ReactNode;
