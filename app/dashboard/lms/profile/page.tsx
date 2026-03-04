"use client";

import React, { useState } from "react";
import SectionMain from "../../../_components/Section/Main";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileTabs, { ProfileTab } from "./_components/ProfileTabs";
import UpskillingStats, { LearnerStats } from "./_components/UpskillingStats";
import RecentLearning from "./_components/RecentLearning";

// Sample data — will be replaced by API/store data
const sampleStats: LearnerStats = {
  courses: { completed: 0, completedSufficient: 0, inProgress: 0 },
  skillPaths: { completed: 0, completedSufficient: 0, inProgress: 0 },
  assessments: { passed: 0, attempted: 0 },
  projects: { completed: 0, inProgress: 0 },
};

export default function LmsProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("overview");

  return (
    <SectionMain>
      <ProfileHeader name="Frans du Plessis" role="Admin" />
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="mt-8 space-y-10">
        {activeTab === "overview" && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h2>
            <UpskillingStats stats={sampleStats} />
            <RecentLearning items={[]} learnerName="Frans du Plessis" />
          </>
        )}

        {activeTab === "upskilling" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upskilling</h2>
            <p className="mt-2 text-gray-500 dark:text-slate-400">
              Courses, skill paths, and learning progress will appear here.
            </p>
          </div>
        )}

        {activeTab === "onboarding" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Onboarding</h2>
            <p className="mt-2 text-gray-500 dark:text-slate-400">
              Onboarding path progress and milestones will appear here.
            </p>
          </div>
        )}

        {activeTab === "about" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About</h2>
            <p className="mt-2 text-gray-500 dark:text-slate-400">
              Profile details, contact information, and team membership will appear here.
            </p>
          </div>
        )}
      </div>
    </SectionMain>
  );
}
