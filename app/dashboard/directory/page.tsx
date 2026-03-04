"use client";

import React from "react";
import SectionMain from "../../_components/Section/Main";
import { Directory, DirectoryCard } from "../../../packages/directory";
import type { DirectoryItem, FilterGroup, DirectoryConfig } from "../../../packages/directory";
import { directoryTools, roles, tags } from "./_lib/directoryData";

const filters: FilterGroup[] = [
  { key: "role", title: "Filter by Role", options: roles },
  { key: "tag", title: "Filter by Tag", options: tags },
];

const config: DirectoryConfig = {
  title: "Discover No-Code Tools",
  subtitle: (
    <p>
      Search and filter through the top no-code tools for the{" "}
      <span className="font-semibold text-blue-600 dark:text-blue-400">
        No Code Creators Club
      </span>
      . Build anything without writing a single line of code.
    </p>
  ),
  searchPlaceholder: "Search tools by name, description, role, or tag...",
  emptyStateTitle: "No tools match those filters",
  emptyStateMessage: "Try adjusting your search or filters to find what you're looking for.",
  actionLabel: "View tool",
  itemsPerPage: 12,
  columns: 3,
};

export default function DirectoryPage() {
  return (
    <Directory<DirectoryItem>
      items={directoryTools}
      filters={filters}
      config={config}
      searchFields={["name", "description", "role", "tag"]}
      wrapper={SectionMain}
      renderCard={(tool) => (
        <DirectoryCard
          item={tool}
          badges={[
            { label: tool.role as string },
            { label: tool.tag as string },
          ]}
          actionLabel="View tool &rarr;"
        />
      )}
    />
  );
}
