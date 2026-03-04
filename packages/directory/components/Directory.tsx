"use client";

import React, { useState, useMemo, ReactNode } from "react";
import DirectoryHero from "./DirectoryHero";
import DirectoryFilters from "./DirectoryFilters";
import DirectoryCard from "./DirectoryCard";
import type { DirectoryItem, FilterGroup, DirectoryConfig, DirectoryCardRenderer } from "../types";

type Props<T extends DirectoryItem = DirectoryItem> = {
  /** Array of items to display */
  items: T[];
  /** Filter groups (e.g. roles, tags) — each group has a key matching a field on the item */
  filters: FilterGroup[];
  /** Configuration for titles, labels, and layout */
  config: DirectoryConfig;
  /** Custom card renderer — if not provided, uses the default DirectoryCard */
  renderCard?: DirectoryCardRenderer<T>;
  /** Fields on the item to search against — defaults to ["name", "description"] */
  searchFields?: (keyof T)[];
  /** Wrapper element — if your app has a layout component, pass it here */
  wrapper?: React.ComponentType<{ children: ReactNode }>;
  /** Custom search icon */
  searchIcon?: ReactNode;
};

export default function Directory<T extends DirectoryItem = DirectoryItem>({
  items,
  filters,
  config,
  renderCard,
  searchFields = ["name", "description"] as (keyof T)[],
  wrapper: Wrapper,
  searchIcon,
}: Props<T>) {
  const {
    title,
    subtitle,
    searchPlaceholder,
    emptyStateTitle = "No items match those filters",
    emptyStateMessage = "Try adjusting your search or filters to find what you're looking for.",
    itemsPerPage = 12,
    columns = 3,
  } = config;

  const [searchQuery, setSearchQuery] = useState("");
  const [filterState, setFilterState] = useState<Record<string, string[]>>(
    Object.fromEntries(filters.map((f) => [f.key, []])),
  );
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const toggleFilter = (groupKey: string, value: string) => {
    setFilterState((prev) => {
      const current = prev[groupKey] || [];
      return {
        ...prev,
        [groupKey]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
    setVisibleCount(itemsPerPage);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Search
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        query === "" ||
        searchFields.some((field) => {
          const val = item[field];
          return typeof val === "string" && val.toLowerCase().includes(query);
        });

      // Filters
      const matchesFilters = filters.every((group) => {
        const selected = filterState[group.key] || [];
        if (selected.length === 0) return true;
        const val = item[group.key as keyof T];
        return typeof val === "string" && selected.includes(val);
      });

      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, filterState, items, filters, searchFields]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;
  const currentPage = Math.ceil(visibleCount / itemsPerPage);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const hasActiveFilters =
    searchQuery !== "" || Object.values(filterState).some((arr) => arr.length > 0);

  const resetAll = () => {
    setSearchQuery("");
    setFilterState(Object.fromEntries(filters.map((f) => [f.key, []])));
    setVisibleCount(itemsPerPage);
  };

  const colsClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
        ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";

  const content = (
    <>
      {/* Hero / Search */}
      <DirectoryHero
        title={title}
        subtitle={subtitle}
        searchPlaceholder={searchPlaceholder}
        searchQuery={searchQuery}
        onSearchChange={(val) => {
          setSearchQuery(val);
          setVisibleCount(itemsPerPage);
        }}
        totalItems={items.length}
        filteredCount={filteredItems.length}
        searchIcon={searchIcon}
      />

      {/* Filters */}
      {filters.length > 0 && (
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900/70">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h2>
            {hasActiveFilters && (
              <button
                onClick={resetAll}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                Reset all
              </button>
            )}
          </div>
          <div className="space-y-6">
            {filters.map((group) => (
              <DirectoryFilters
                key={group.key}
                title={group.title}
                options={group.options}
                selected={filterState[group.key] || []}
                onToggle={(val) => toggleFilter(group.key, val)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Results Grid */}
      {filteredItems.length > 0 ? (
        <>
          <div className={`grid gap-6 ${colsClass}`}>
            {visibleItems.map((item) =>
              renderCard ? (
                <React.Fragment key={item.id}>{renderCard(item)}</React.Fragment>
              ) : (
                <DirectoryCard key={item.id} item={item} />
              ),
            )}
          </div>

          {hasMore && (
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={() => setVisibleCount((prev) => prev + itemsPerPage)}
                className="rounded-xl border border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-300"
              >
                Load more
              </button>
              <span className="text-xs text-gray-400 dark:text-slate-500">
                {currentPage} / {totalPages}
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 py-20 dark:border-slate-600">
          <p className="text-lg font-semibold text-gray-500 dark:text-slate-400">
            {emptyStateTitle}
          </p>
          <p className="mt-2 text-sm text-gray-400 dark:text-slate-500">{emptyStateMessage}</p>
          <button
            onClick={resetAll}
            className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );

  if (Wrapper) {
    return <Wrapper>{content}</Wrapper>;
  }

  return <>{content}</>;
}
