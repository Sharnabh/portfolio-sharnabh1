import { SeoContent } from "./components/SeoContent";
import { PortfolioIDE } from "./components/PortfolioIDE";

export default function Home() {
  return (
    <>
      {/* Server-rendered crawlable content for SEO — visually hidden */}
      <SeoContent />

      {/* Client-rendered interactive Xcode IDE portfolio */}
      <PortfolioIDE />
    </>
  );
}
