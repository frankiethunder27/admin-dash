"use client";

import React, { useState } from "react";
import {
  mdiPlusCircleOutline,
  mdiSchool,
  mdiBookOpenPageVariant,
  mdiFlask,
  mdiClipboardTextOutline,
} from "@mdi/js";
import Icon from "../../_components/Icon";
import SectionMain from "../../_components/Section/Main";
import TemplateCard from "./_components/TemplateCard";
import { lmsTemplates, LmsTemplate } from "./_lib/lmsData";

export default function LmsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<LmsTemplate | null>(null);

  const handleSelectTemplate = (template: LmsTemplate) => {
    setSelectedTemplate(template);
  };

  const handleCreateFromScratch = () => {
    setSelectedTemplate(null);
  };

  return (
    <SectionMain>
      {/* Hero */}
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
          <Icon path={mdiSchool} size="36" className="text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Learning Management
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-slate-400">
          Create customized learning paths for your academy. Select a pre-built template to get
          started quickly, or build one from scratch.
        </p>

        {/* Feature pills */}
        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Icon path={mdiBookOpenPageVariant} size="16" />
            Courses & Sections
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3.5 py-1.5 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            <Icon path={mdiFlask} size="16" />
            Cloud Labs
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3.5 py-1.5 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
            <Icon path={mdiClipboardTextOutline} size="16" />
            Assessments
          </span>
        </div>
      </div>

      {/* Create from Scratch */}
      <div className="mb-8">
        <button
          onClick={handleCreateFromScratch}
          className="group flex w-full items-center gap-4 rounded-2xl border-2 border-dashed border-gray-300 bg-white p-5 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-blue-500 dark:hover:bg-blue-900/10"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 transition-colors group-hover:bg-blue-100 dark:bg-slate-800 dark:group-hover:bg-blue-900/30">
            <Icon
              path={mdiPlusCircleOutline}
              size="28"
              className="text-gray-400 transition-colors group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400"
            />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
              Create from Scratch
            </h3>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-slate-400">
              Build a fully custom learning path with your own modules, lessons, and assessments.
            </p>
          </div>
        </button>
      </div>

      {/* Template Section Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Select a Template
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Choose a pre-built onboarding path and customize it to your needs.
          </p>
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-slate-800 dark:text-slate-400">
          {lmsTemplates.length} templates
        </span>
      </div>

      {/* Template Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {lmsTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onSelect={handleSelectTemplate}
          />
        ))}
      </div>

      {/* Selected Template Confirmation */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={selectedTemplate.icon}
                alt={selectedTemplate.title}
                className="h-12 w-12 rounded-xl"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {selectedTemplate.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  {selectedTemplate.modules.length} modules &middot;{" "}
                  {selectedTemplate.modules.reduce((s, m) => s + m.lessons, 0)} lessons
                </p>
              </div>
            </div>
            <p className="mb-6 text-sm text-gray-600 dark:text-slate-300">
              This will create a new learning path based on the{" "}
              <strong>{selectedTemplate.title}</strong> template. You can customize all modules and
              lessons after creation.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedTemplate(null)}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // TODO: Navigate to course builder with template
                  setSelectedTemplate(null);
                }}
                className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Create Learning Path
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionMain>
  );
}
