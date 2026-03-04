"use client";

import React from "react";
import { mdiCheckCircleOutline } from "@mdi/js";
import Icon from "../../../../_components/Icon";

export type LearnerStats = {
  courses: { completed: number; completedSufficient: number; inProgress: number };
  skillPaths: { completed: number; completedSufficient: number; inProgress: number };
  assessments: { passed: number; attempted: number };
  projects: { completed: number; inProgress: number };
};

type Props = {
  stats: LearnerStats;
};

export default function UpskillingStats({ stats }: Props) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Upskilling Stats</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Courses */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-xs font-bold tracking-wider text-gray-400 uppercase dark:text-slate-500">
            Courses
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">Completed</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {stats.courses.completed}
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
            <Icon path={mdiCheckCircleOutline} size="14" />
            <span>{stats.courses.completedSufficient} Completed with sufficient time spent</span>
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-slate-400">In Progress</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {stats.courses.inProgress}
          </p>
        </div>

        {/* Skill Paths */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-xs font-bold tracking-wider text-gray-400 uppercase dark:text-slate-500">
            Skill Paths
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">Completed</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {stats.skillPaths.completed}
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
            <Icon path={mdiCheckCircleOutline} size="14" />
            <span>
              {stats.skillPaths.completedSufficient} Completed with sufficient time spent
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-slate-400">In Progress</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {stats.skillPaths.inProgress}
          </p>
        </div>

        {/* Assessments */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-xs font-bold tracking-wider text-gray-400 uppercase dark:text-slate-500">
            Assessments
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">Passed</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {stats.assessments.passed}
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-slate-400">Attempted</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {stats.assessments.attempted}
          </p>
        </div>

        {/* Projects */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-xs font-bold tracking-wider text-gray-400 uppercase dark:text-slate-500">
            Projects
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">Completed</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {stats.projects.completed}
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-slate-400">In Progress</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {stats.projects.inProgress}
          </p>
        </div>
      </div>
    </div>
  );
}
