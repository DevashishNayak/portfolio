import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="top" className="section-wrap hero">
      <div className="hero-copy">
        <span className="status">
          <i aria-hidden />
          Open to thoughtful collaborations
        </span>
        <h1>
          Frontend for
          <br />
          <em>real moments.</em>
        </h1>
        <p className="hero-lede">
          I&apos;m {profile.shortName}, a senior frontend engineer building
          real-time React products and grounded LLM experiences that feel clear,
          fast, and human.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">
            View selected work
            <ArrowUpRightIcon size={17} weight="regular" />
          </a>
          <a className="text-link" href="#contact">
            Start a conversation
            <ArrowUpRightIcon size={15} weight="regular" />
          </a>
        </div>
      </div>
      <div className="hero-art" aria-hidden>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <p className="hero-note note-top">
          Remote / India
          <br />
          <span>systems with soul</span>
        </p>
        <div className="hero-symbol">✦</div>
        <p className="hero-note note-bottom">
          5+ years building
          <br />
          <span>useful interfaces</span>
        </p>
      </div>
    </section>
  );
}
