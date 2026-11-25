import type { TComparisonRowProps } from "../types";
import { statusClass } from "./Showcase";

const ComparisonRow = ({
  label,
  source,
  generated,
  hasRun,
}: TComparisonRowProps) => {
  const text = generated?.trim();
  const isMissing = hasRun && !text;

  return (
    <tr className="align-top">
      <th scope="row" className="px-4 py-5 text-sm font-semibold">
        {label}
        {hasRun && text && (
          <span
            className={`mt-2 block w-fit rounded px-2 py-1 text-xs ${statusClass.passed}`}
          >
            Present
          </span>
        )}
      </th>

      <td className="border-l border-[#232425] px-4 py-5 text-sm leading-relaxed text-zinc-300">
        {source}
      </td>

      <td
        className={`border-l border-[#232425] px-4 py-5 text-sm leading-relaxed ${
          isMissing ? "bg-[#241a0e] text-[#f5bd6a]" : "text-zinc-300"
        }`}
      >
        {hasRun ? text || "Missing from draft" : "Awaiting check"}
      </td>
    </tr>
  );
};

export default ComparisonRow;
