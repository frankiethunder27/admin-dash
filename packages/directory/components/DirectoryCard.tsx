"use client";

import React, { ReactNode } from "react";
import type { DirectoryItem } from "../types";

type Badge = {
  label: string;
  className?: string;
};

type Props<T extends DirectoryItem = DirectoryItem> = {
  item: T;
  /** Badges shown in the footer (e.g. role, tag) */
  badges?: Badge[];
  /** Label for the action link — defaults to "View →" */
  actionLabel?: string;
  /** Custom card body renderer — overrides the default layout */
  renderBody?: (item: T) => ReactNode;
};

const defaultBadgeClasses = [
  "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-400",
  "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
];

export default function DirectoryCard<T extends DirectoryItem = DirectoryItem>({
  item,
  badges = [],
  actionLabel = "View \u2192",
  renderBody,
}: Props<T>) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-blue-500">
      {renderBody ? (
        renderBody(item)
      ) : (
        <div className="flex items-center gap-4 p-5">
          <img
            src={item.image}
            alt={item.name}
            className="h-14 w-14 rounded-xl object-cover"
            loading="lazy"
          />
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-bold text-gray-900 dark:text-white">
              {item.name}
            </h3>
            <p className="mt-0.5 line-clamp-2 text-sm text-gray-500 dark:text-slate-400">
              {item.description}
            </p>
          </div>
        </div>
      )}
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 px-5 py-3 dark:border-slate-700/50">
        <div className="flex items-center gap-2">
          {badges.map((badge, idx) => (
            <span
              key={badge.label}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                badge.className || defaultBadgeClasses[idx % defaultBadgeClasses.length]
              }`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <a
          href={item.url}
          className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {actionLabel}
        </a>
      </div>
    </div>
  );
}
