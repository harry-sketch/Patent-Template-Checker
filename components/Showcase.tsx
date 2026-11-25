"use client";

import Link from "next/link";
import { useState } from "react";
import { runChecks } from "@/lib/utils";
import { inventions } from "../lib/data";
import ComparisonRow from "./ComparisonRow";

export const statusClass = {
  unchecked: "bg-zinc-800 text-zinc-300",
  passed: "bg-[#10251a] text-[#86e0ad]",
  missing: "bg-[#30210e] text-[#f5bd6a]",
};

export default function Showcase() {
  const [isFigureDesc, setIsFigureDesc] = useState(true);
  const [includeAbstract, setIncludeAbstract] = useState(true);
  const [run, setRun] = useState<ReturnType<typeof runChecks> | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = inventions[selectedIndex];
  const selectedRun = run?.[selectedIndex];
  const hasRun = selectedRun !== undefined;
  const failedCount = run?.filter(({ result }) => !result.isPassed).length ?? 0;

  function handleRunChecks() {
    const nextRun = runChecks(isFigureDesc, includeAbstract);
    setRun(nextRun);

    const firstFailure = nextRun.findIndex(({ result }) => !result.isPassed);

    if (firstFailure >= 0) {
      setSelectedIndex(firstFailure);
    }
  }

  return (
    <>
      <header className="flex w-full flex-wrap items-center justify-between gap-3 border-b border-[#232425] py-3">
        <h1 className="text-2xl font-bold text-zinc-50">
          Patent Template Checker
        </h1>

        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-sm font-medium text-[#8b8b96] underline underline-offset-4 hover:text-zinc-100"
          >
            About this prototype
          </Link>

          <button
            type="button"
            onClick={handleRunChecks}
            disabled={inventions.length === 0}
            className="rounded-lg bg-[#ada2fc] px-3 py-1.5 font-semibold text-black hover:bg-violet-200 disabled:opacity-50"
          >
            Run checks
          </button>
        </div>
      </header>

      <div className="mt-4 grid rounded-lg border border-[#232425] bg-[#0a0a0a] text-zinc-100 lg:grid-cols-[19rem_minmax(0,1fr)]">
        <aside className="border-b border-[#232425] p-4 lg:border-r lg:border-b-0">
          <fieldset className="space-y-3">
            <legend className="mb-4 text-2xl font-semibold">
              Template settings
            </legend>

            <label className="flex cursor-pointer items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={includeAbstract}
                onChange={(event) => {
                  setIncludeAbstract(event.currentTarget.checked);
                  setRun(null);
                }}
                className="size-4 accent-violet-300"
              />
              Include abstract
            </label>

            <label className="flex cursor-pointer items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={isFigureDesc}
                onChange={(event) => {
                  setIsFigureDesc(event.currentTarget.checked);
                  setRun(null);
                }}
                className="size-4 accent-violet-300"
              />
              Include figure descriptions
            </label>
          </fieldset>

          <section className="mt-7 border-t border-[#232425] pt-6">
            <h2 className="text-2xl font-semibold">Sample drafts</h2>

            <ul className="mt-3 divide-y divide-[#232425]">
              {inventions.map((invention, index) => {
                const result = run?.[index]?.result;
                const isSelected = selectedIndex === index;

                const status = !result
                  ? { label: "Not checked", color: statusClass.unchecked }
                  : result.isPassed
                    ? { label: "Passed", color: statusClass.passed }
                    : { label: "Needs attention", color: statusClass.missing };

                return (
                  <li key={invention.name} className="py-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      aria-current={isSelected ? "true" : undefined}
                      className={`w-full rounded-md border-l-2 px-3 py-3 text-left ${
                        isSelected
                          ? "border-violet-300 bg-[#202024]"
                          : "border-transparent hover:bg-zinc-900"
                      }`}
                    >
                      <span className="block font-medium">
                        {invention.name}
                      </span>
                      <span
                        className={`mt-2 inline-block rounded px-2 py-1 text-xs font-medium ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </aside>

        <section className="min-w-0 p-4">
          {selected ? (
            <>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {selected.name}
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                {run === null
                  ? "Run checks to review the sample drafts."
                  : failedCount === 0
                    ? "All sample drafts passed."
                    : failedCount === 1
                      ? "1 draft needs attention."
                      : `${failedCount} drafts need attention.`}
              </p>

              <div className="mt-7 overflow-x-auto rounded-lg border border-[#232425] focus-visible:outline-2 focus-visible:outline-violet-300">
                <table className="w-full min-w-xl table-fixed border-collapse bg-[#121212] text-left">
                  <thead className="bg-[#191919] text-sm">
                    <tr>
                      <th scope="col" className="w-28 px-4 py-3 font-semibold">
                        Section
                      </th>
                      <th
                        scope="col"
                        className="border-l border-[#232425] px-4 py-3 font-semibold"
                      >
                        Source material
                      </th>
                      <th
                        scope="col"
                        className="border-l border-[#232425] px-4 py-3 font-semibold"
                      >
                        Generated draft
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#232425] border-t border-[#232425]">
                    <ComparisonRow
                      label="Abstract"
                      source={selected.abstract}
                      generated={selectedRun?.draft.abstract}
                      hasRun={hasRun}
                    />

                    {selected.drawings.map(({ id, description }) => (
                      <ComparisonRow
                        key={id}
                        label={id}
                        source={description}
                        generated={
                          selectedRun?.draft.drawings.find(
                            (drawing) => drawing.id === id,
                          )?.description
                        }
                        hasRun={hasRun}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p className="text-sm text-zinc-400">No sample drafts available.</p>
          )}
        </section>
      </div>
    </>
  );
}
