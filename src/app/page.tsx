import { About } from "@/components/overlay/About";
import { Contact } from "@/components/overlay/Contact";
import { Grain } from "@/components/overlay/Grain";
import { Hero } from "@/components/overlay/Hero";
import { Journey } from "@/components/overlay/Journey";
import { Nav } from "@/components/overlay/Nav";
import { Ticker } from "@/components/overlay/Ticker";
import { Work } from "@/components/overlay/Work";

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Grain />
      <div className="portfolio">
        <Nav />
        <main id="content" className="relative">
          <Hero />
          <Ticker />
          <Work />
          <About />
          <Journey />
          <Contact />
        </main>
      </div>
    </>
  );
}
