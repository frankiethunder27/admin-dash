"use client";

import React from "react";
import { mdiMagnify } from "@mdi/js";
import Icon from "../../../_components/Icon";

type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalTools: number;
  filteredCount: number;
};

export default function DirectoryHero({
  searchQuery,
  onSearchChange,
  totalTools,
  filteredCount,
}: Props) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        Discover No-Code Tools
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-slate-400">
        Search and filter through the top no-code tools for the{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          No Code Creators Club
        </span>
        . Build anything without writing a single line of code.
      </p>

      {/* Search bar */}
      <div className="relative mx-auto mt-8 max-w-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Icon path={mdiMagnify} size="24" className="text-gray-400 dark:text-slate-500" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tools by name, description, role, or tag..."
          className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-base text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
        />
      </div>

      {/* Result count */}
      <p className="mt-4 text-sm text-gray-500 dark:text-slate-400">
        Showing{" "}
        <span className="font-semibold text-gray-800 dark:text-slate-200">{filteredCount}</span>{" "}
        of {totalTools} tools
      </p>
    </div>
  );
}
