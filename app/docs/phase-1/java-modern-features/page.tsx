import type { Metadata } from "next";
import { JavaModernFeaturesPageClient } from "./_components/java-modern-features-view";

export const metadata: Metadata = {
  title: "Modern Java Essentials",
  description:
    "Four features that make your code type-safe, readable, and null-safe. Master these and Spring Boot code will make immediate sense.",
};

export default function JavaModernFeaturesPage() {
  return <JavaModernFeaturesPageClient />;
}
