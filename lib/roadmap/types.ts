export type RoadmapPracticalItem =
  | string
  | {
      text: string;
      slug?: string;
    };

export interface RoadmapStep {
  title: string;
  practical: RoadmapPracticalItem[];
}

export interface RoadmapPhase {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  color: string;
  icon: string;
  steps: RoadmapStep[];
}

export interface ToolCategory {
  cat: string;
  items: string[];
}

export interface SeniorTip {
  icon: string;
  title: string;
  points: string[];
  color: string;
}

export type TabId = "roadmap" | "tools" | "tips";
