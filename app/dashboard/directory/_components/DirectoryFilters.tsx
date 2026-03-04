"use client";

import React, { useState } from "react";

type Props = {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
};

export default function DirectoryFilters({ title, options, selected, onToggle }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCount = 8;
  const displayOptions = isExpanded ? options : options.slice(0, visibleCount);
  const hasMore = options.length > visibleCount;

  return (
    <div>
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {displayOptions.map((option) => {
          const isActive = selected.includes(option);
          return (
            <button
              key={option}
              onClick={() => onToggle(option)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-blue-500 bg-blue-600 text-white dark:border-blue-400 dark:bg-blue-500"
                  : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-700"
              }`}
            >
              {option}
            </button>
          );
        })}
        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-full border border-dashed border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700 dark:border-slate-600 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
          >
            {isExpanded ? "Show less" : `+${options.length - visibleCount} more`}
          </button>
        )}
      </div>
    </div>
  );
}
