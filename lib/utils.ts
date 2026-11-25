import type { TInventionType } from "@/types";
import { inventions } from "./data";

export const generateDraft = (
  invention: TInventionType,
  isFigureDesc: boolean,
  includeAbstract: boolean,
) => {
  return {
    name: invention.name,
    abstract: includeAbstract ? invention.abstract : "",
    drawings: isFigureDesc ? invention.drawings : [],
  };
};

export const checkDraft = (
  invention: TInventionType,
  isFigureDesc: boolean,
  includeAbstract: boolean,
) => {
  const draft = generateDraft(invention, isFigureDesc, includeAbstract);

  const matchingStats: string[] = [];

  for (const drawing of invention.drawings) {
    const matchingFigure = draft.drawings.find(({ id }) => id === drawing.id);

    if (!matchingFigure?.description.trim()) {
      matchingStats.push(drawing.id);
    }
  }

  const isAbstractMissing = draft?.abstract.trim().length === 0;

  return {
    title: draft.name,
    isPassed: matchingStats.length === 0 && !isAbstractMissing,
    isAbstractMissing,
  };
};

export const runChecks = (isFigureDesc: boolean, includeAbstract: boolean) => {
  return inventions.map((invention) => ({
    draft: generateDraft(invention, isFigureDesc, includeAbstract),
    result: checkDraft(invention, isFigureDesc, includeAbstract),
  }));
};
