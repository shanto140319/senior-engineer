import { SiteHeader } from "@/app/_components/site-header";
import "./docs.css";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-page">
      <SiteHeader />
      {children}
    </div>
  );
}
