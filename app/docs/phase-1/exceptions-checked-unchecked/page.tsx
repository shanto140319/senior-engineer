import type { Metadata } from "next";
import { exceptionsMeta } from "@/lib/docs/phase-1/exceptions-checked-unchecked/data";
import { ExceptionsPageClient } from "./_components/exceptions-view";

export const metadata: Metadata = {
  title: exceptionsMeta.title,
  description: exceptionsMeta.description,
};

export default function ExceptionsPage() {
  return <ExceptionsPageClient />;
}
