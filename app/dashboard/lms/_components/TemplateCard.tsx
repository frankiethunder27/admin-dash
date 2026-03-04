"use client";

import React, { useState } from "react";
import { mdiChevronDown, mdiChevronUp, mdiBookOpenPageVariant, mdiClockOutline } from "@mdi/js";
import Icon from "../../../_components/Icon";
import type { LmsTemplate } from "../_lib/lmsData";

type Props = {
  template: LmsTemplate;
  onSelect: (template: LmsTemplate) => void;
};

const colorMap: Record<string, { bg: string; border: string; badge: string; text: string }> = {
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 hover:border-indigo-400 dark:border-indigo-800 dark:hover:border-indigo-500",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  pink: {
    bg: "bg-pink-50 dark:bg-pink-900/20",
    border: "border-pink-200 hover:border-pink-400 dark:border-pink-800 dark:hover:border-pink-500",
    badge: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
    text: "text-pink-600 dark:text-pink-400",
  },
  teal: {
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 hover:border-teal-400 dark:border-teal-800 dark:hover:border-teal-500",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    text: "text-teal-600 dark:text-teal-400",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 hover:border-orange-400 dark:border-orange-800 dark:hover:border-orange-500",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    text: "text-orange-600 dark:text-orange-400",
  },
  slate: {
    bg: "bg-slate-50 dark:bg-slate-800/40",
    border: "border-slate-200 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500",
    badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    text: "text-slate-600 dark:text-slate-400",
  },
};

export default function TemplateCard({ template, onSelect }: Props) {
  const [showPreview, setShowPreview] = useState(false);
  const colors = colorMap[template.color] || colorMap.slate;

  const totalLessons = template.modules.reduce((sum, m) => sum + m.lessons, 0);
  const totalModules = template.modules.length;

  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg dark:bg-slate-900/70 ${colors.border}`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 p-5">
        <img
          src={template.icon}
          alt={template.title}
          className="h-14 w-14 rounded-xl object-cover"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {template.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            {template.description}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className={`mx-5 flex items-center gap-4 rounded-lg px-4 py-2.5 ${colors.bg}`}>
        <div className="flex items-center gap-1.5">
          <Icon path={mdiBookOpenPageVariant} size="16" className={colors.text} />
          <span className={`text-sm font-medium ${colors.text}`}>
            {totalModules} modules
          </span>
        </div>
        <div className="h-4 w-px bg-gray-200 dark:bg-slate-700" />
        <div className="flex items-center gap-1.5">
          <Icon path={mdiClockOutline} size="16" className={colors.text} />
          <span className={`text-sm font-medium ${colors.text}`}>
            {totalLessons} lessons
          </span>
        </div>
      </div>

      {/* Preview toggle */}
      {showPreview && (
        <div className="mx-5 mt-3 space-y-2">
          {template.modules.map((mod, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-4 py-2.5 dark:border-slate-700/50 dark:bg-slate-800/50"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-800 dark:text-slate-200">
                  {idx + 1}. {mod.title}
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-slate-400">
                  {mod.description}
                </p>
              </div>
              <div className="ml-3 flex shrink-0 items-center gap-3 text-xs text-gray-400 dark:text-slate-500">
                <span>{mod.lessons} lessons</span>
                <span>{mod.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 px-5 py-3 dark:border-slate-700/50 mt-4">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          <Icon
            path={showPreview ? mdiChevronUp : mdiChevronDown}
            size="18"
          />
          {showPreview ? "Hide preview" : "Preview"}
        </button>
        <button
          onClick={() => onSelect(template)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Select Template
        </button>
      </div>
    </div>
  );
}
