"use client";

import React from "react";
import { mdiClipboardTextOutline, mdiInformationOutline } from "@mdi/js";
import Icon from "../../../../_components/Icon";

type RecentItem = {
  id: string;
  title: string;
  type: "course" | "learning-path";
  completed: boolean;
};

type Props = {
  items: RecentItem[];
  learnerName: string;
};

export default function RecentLearning({ items, learnerName }: Props) {
  const firstName = learnerName.split(" ")[0];

  if (items.length === 0) {
    return (
      <div>
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Learning</h3>
          <Icon
            path={mdiInformationOutline}
            size="16"
            className="text-gray-400 dark:text-slate-500"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-8 dark:from-slate-800 dark:to-slate-950">
          {/* Decorative cards */}
          <div className="absolute top-6 left-8 flex gap-3">
            <div className="w-28 rounded-lg bg-slate-600/60 p-3 backdrop-blur-sm">
              <span className="mb-1 block text-[10px] font-semibold text-blue-300 uppercase">
                Learning Path
              </span>
              <p className="text-xs font-medium text-white">Python for Programmers</p>
              <div className="mt-3 flex justify-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                  <span className="text-xs text-white">&#10003;</span>
                </div>
              </div>
            </div>
            <div className="w-28 rounded-lg bg-slate-600/60 p-3 backdrop-blur-sm">
              <span className="mb-1 block text-[10px] font-semibold text-green-300 uppercase">
                Course
              </span>
              <p className="text-xs font-medium text-white">Docker for Developers</p>
              <div className="mt-3 flex justify-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <span className="text-xs text-white">&#10003;</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA content */}
          <div className="ml-72 py-4">
            <h4 className="text-xl font-bold text-white">Assign a Course to {firstName}</h4>
            <p className="mt-2 max-w-md text-sm text-slate-300">
              We noticed {firstName} has not started any course or skill path. Do you want to assign
              them a course to begin upskilling?
            </p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-500 bg-transparent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-slate-400 hover:bg-slate-700/50">
              <Icon path={mdiClipboardTextOutline} size="18" />
              Assign Content
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Learning</h3>
        <Icon
          path={mdiInformationOutline}
          size="16"
          className="text-gray-400 dark:text-slate-500"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
          >
            <span
              className={`text-xs font-semibold uppercase ${
                item.type === "learning-path"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-green-600 dark:text-green-400"
              }`}
            >
              {item.type === "learning-path" ? "Learning Path" : "Course"}
            </span>
            <p className="mt-1 font-medium text-gray-900 dark:text-white">{item.title}</p>
            {item.completed && (
              <span className="mt-2 inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                Completed
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
