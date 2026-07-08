export interface LastReadEntry {
  phaseId: number;
  slug: string;
  chapterTitle: string;
  topicId: string | null;
  topicTitle: string | null;
  topicIcon: string | null;
  topicColor: string | null;
  href: string;
  readAt: number;
}
