"use client";

import React from "react";

export type ProfileTab = "overview" | "upskilling" | "onboarding" | "about";

type Props = {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
};

const tabs: { key: ProfileTab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "upskilling", label: "Upskilling" },
  { key: "onboarding", label: "Onboarding" },
  { key: "about", label: "About" },
];

export default function ProfileTabs({ activeTab, onTabChange }: Props) {
  return (
    <div className="mt-8 border-b border-gray-200 dark:border-slate-700">
      <nav className="-mb-px flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`pb-3 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "border-b-2 border-gray-900 text-gray-900 dark:border-white dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
