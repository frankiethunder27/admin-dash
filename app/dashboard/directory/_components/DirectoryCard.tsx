"use client";

import React from "react";
import Image from "next/image";
import type { DirectoryTool } from "../_lib/directoryData";

type Props = {
  tool: DirectoryTool;
};

export default function DirectoryCard({ tool }: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-blue-500">
      <div className="flex items-center gap-4 p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tool.image}
          alt={tool.name}
          className="h-14 w-14 rounded-xl object-cover"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-bold text-gray-900 dark:text-white">
            {tool.name}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-sm text-gray-500 dark:text-slate-400">
            {tool.description}
          </p>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 px-5 py-3 dark:border-slate-700/50">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {tool.role}
          </span>
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-slate-800 dark:text-slate-400">
            {tool.tag}
          </span>
        </div>
        <a
          href={tool.url}
          className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View tool &rarr;
        </a>
      </div>
    </div>
  );
}
