"use client";

import React, { useState, useMemo } from "react";
import SectionMain from "../../_components/Section/Main";
import DirectoryHero from "./_components/DirectoryHero";
import DirectoryFilters from "./_components/DirectoryFilters";
import DirectoryCard from "./_components/DirectoryCard";
import { directoryTools, roles, tags } from "./_lib/directoryData";

const ITEMS_PER_PAGE = 12;

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value],
    );
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const filteredTools = useMemo(() => {
    return directoryTools.filter((tool) => {
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tag.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRole =
        selectedRoles.length === 0 || selectedRoles.includes(tool.role);

      const matchesTag =
        selectedTags.length === 0 || selectedTags.includes(tool.tag);

      return matchesSearch && matchesRole && matchesTag;
    });
  }, [searchQuery, selectedRoles, selectedTags]);

  const visibleTools = filteredTools.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTools.length;
  const currentPage = Math.ceil(visibleCount / ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE);
  const hasActiveFilters =
    searchQuery !== "" || selectedRoles.length > 0 || selectedTags.length > 0;

  const resetAll = () => {
    setSearchQuery("");
    setSelectedRoles([]);
    setSelectedTags([]);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <SectionMain>
      {/* Hero / Search */}
      <DirectoryHero
        searchQuery={searchQuery}
        onSearchChange={(val) => {
          setSearchQuery(val);
          setVisibleCount(ITEMS_PER_PAGE);
        }}
        totalTools={directoryTools.length}
        filteredCount={filteredTools.length}
      />

      {/* Filters Section */}
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
          <DirectoryFilters
            title="Filter by Role"
            options={roles}
            selected={selectedRoles}
            onToggle={(val) => toggleFilter(val, selectedRoles, setSelectedRoles)}
          />
          <DirectoryFilters
            title="Filter by Tag"
            options={tags}
            selected={selectedTags}
            onToggle={(val) => toggleFilter(val, selectedTags, setSelectedTags)}
          />
        </div>
      </div>

      {/* Results Grid */}
      {filteredTools.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleTools.map((tool) => (
              <DirectoryCard key={tool.id} tool={tool} />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
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
        /* Empty state */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 py-20 dark:border-slate-600">
          <p className="text-lg font-semibold text-gray-500 dark:text-slate-400">
            No tools match those filters
          </p>
          <p className="mt-2 text-sm text-gray-400 dark:text-slate-500">
            Try adjusting your search or filters to find what you&apos;re looking for.
          </p>
          <button
            onClick={resetAll}
            className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Reset filters
          </button>
        </div>
      )}
    </SectionMain>
  );
}
