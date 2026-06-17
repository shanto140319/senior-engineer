import type { Metadata } from "next";
import { Suspense } from "react";
import { oopSolidMeta } from "@/lib/docs/phase-1/oop-solid-composition/data";
import { OopSolidView } from "./_components/oop-solid-view";

export const metadata: Metadata = {
  title: oopSolidMeta.title,
  description: oopSolidMeta.description,
};

export default function OopSolidPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060911]" />}>
      <OopSolidView />
    </Suspense>
  );
}
