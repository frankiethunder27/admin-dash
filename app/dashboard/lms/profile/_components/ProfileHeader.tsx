"use client";

import React, { useState } from "react";
import { mdiChevronDown, mdiClipboardTextOutline, mdiArrowLeft } from "@mdi/js";
import Icon from "../../../../_components/Icon";

type Props = {
  name: string;
  role: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, role, avatarUrl }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div>
      {/* Go Back */}
      <button className="mb-4 flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300">
        <Icon path={mdiArrowLeft} size="16" />
        Go Back
      </button>

      {/* Profile row */}
      <div className="flex items-center gap-6">
        {/* Avatar */}
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="h-24 w-24 rounded-full border-4 border-gray-200 object-cover dark:border-slate-700"
          />
        ) : (
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-gray-300 bg-amber-800 text-4xl font-bold text-white dark:border-slate-600">
            {initials}
          </div>
        )}

        {/* Name & role */}
        <div className="flex-1">
          <span className="text-xs font-bold tracking-wider text-gray-400 uppercase dark:text-slate-500">
            {role}
          </span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h1>
        </div>

        {/* Assign Content button */}
        <div className="relative flex items-center">
          <button className="flex items-center gap-2 rounded-l-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
            <Icon path={mdiClipboardTextOutline} size="18" />
            Assign Content
          </button>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="rounded-r-lg border border-l-0 border-gray-300 bg-white px-2.5 py-2.5 text-gray-500 transition-colors hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            <Icon path={mdiChevronDown} size="18" />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full right-0 z-10 mt-1 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-700">
                Assign Course
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-700">
                Assign Skill Path
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-700">
                Assign Assessment
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-700">
                Assign Project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
