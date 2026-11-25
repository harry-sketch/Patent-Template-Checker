import type { TInventionType } from "@/types";

export const inventions: TInventionType[] = [
  {
    name: "Cooling system for an electric vehicle battery pack",
    abstract:
      "A cooling system circulates liquid through channels between battery modules to remove heat from an electric vehicle battery pack.",
    drawings: [
      {
        id: "FIG. 1",
        description:
          "Top view of the battery pack showing coolant channels between battery modules.",
      },
      {
        id: "FIG. 2",
        description:
          "Cross-section showing how a coolant channel sits against a battery module.",
      },
    ],
  },
  {
    name: "Method for preventing duplicate payments during retries",
    abstract:
      "A payment service associates each request with a unique key. When a request is retried with the same key, the service returns the stored result without creating a second charge.",
    drawings: [],
  },
  {
    name: "Adaptive video streaming in multi-party calls",
    abstract:
      "A media server selects a video quality for each participant based on the bandwidth available to that participant during a group call.",
    drawings: [
      {
        id: "FIG. 1",
        description:
          "System diagram showing participants sending video streams to a media server.",
      },
      {
        id: "FIG. 2",
        description:
          "Flowchart showing how the server selects a lower video quality when a participant's connection slows down.",
      },
    ],
  },
  {
    name: "Recovering missing updates in a real-time market data feed",
    abstract:
      "A client uses sequence numbers to detect missing market data updates. After detecting a gap, it requests a fresh snapshot and applies subsequent updates in order.",
    drawings: [
      {
        id: "FIG. 1",
        description:
          "Sequence diagram showing a client detecting a gap in market data updates and requesting a fresh snapshot.",
      },
    ],
  },
];
