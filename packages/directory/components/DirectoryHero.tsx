"use client";

import React, { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string | ReactNode;
  searchPlaceholder?: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalItems: number;
  filteredCount: number;
  /** Pass a custom search icon if needed — defaults to a simple SVG magnifier */
  searchIcon?: ReactNode;
};

function DefaultSearchIcon() {
  return (
    <svg
      className="h-5 w-5 text-gray-400 dark:text-slate-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export default function DirectoryHero({
  title,
  subtitle,
  searchPlaceholder = "Search...",
  searchQuery,
  onSearchChange,
  totalItems,
  filteredCount,
  searchIcon,
}: Props) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        {title}
      </h1>
      <div className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-slate-400">
        {typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle}
      </div>

      {/* Search bar */}
      <div className="relative mx-auto mt-8 max-w-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          {searchIcon || <DefaultSearchIcon />}
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-base text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
        />
      </div>

      {/* Result count */}
      <p className="mt-4 text-sm text-gray-500 dark:text-slate-400">
        Showing{" "}
        <span className="font-semibold text-gray-800 dark:text-slate-200">{filteredCount}</span>{" "}
        of {totalItems} items
      </p>
    </div>
  );
}
