export type DocSectionType = "text" | "code";

export interface DocSection {
  heading: string;
  body: string;
  type?: DocSectionType;
}

export interface DocTopic {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  color: string;
  sections: DocSection[];
}

export interface QuickReferenceItem {
  color: string;
  title: string;
  line: string;
}

export interface SolidQuickReferenceRow {
  letter: string;
  color: string;
  rule: string;
  summary: string;
  topicId?: string;
}

export interface DocPageMeta {
  phaseId: number;
  phaseLabel: string;
  title: string;
  description: string;
  slug: string;
}
