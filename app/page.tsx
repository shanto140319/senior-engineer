import { DocChapters } from "./_components/doc-chapters";
import { HomeCta } from "./_components/home-cta";
import { HomeHero } from "./_components/home-hero";
import { JourneyStats } from "./_components/journey-stats";
import { LastRead } from "./_components/last-read";
import { SiteHeader } from "./_components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] font-sans text-slate-200">
      <SiteHeader />
      <HomeHero />
      <JourneyStats />
      <LastRead />
      <DocChapters />
      <HomeCta />

      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-slate-600 sm:px-8">
        Senior Engineer Journey — documentation built step by step
      </footer>
    </div>
  );
}
