export type TInventionType = {
  name: string;
  abstract: string;
  drawings: { id: string; description: string }[];
};

export type TComparisonRowProps = {
  label: string;
  source: string;
  generated: string | undefined;
  hasRun: boolean;
};
