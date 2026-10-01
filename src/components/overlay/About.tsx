import {
  ArrowUpRightIcon,
  AtomIcon,
  BroadcastIcon,
  CodeIcon,
  CubeIcon,
  LightningIcon,
  SparkleIcon,
  StackIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react/ssr";
import { featuredSkills } from "@/content/projects";
import { profile } from "@/content/profile";

const icons = [
  AtomIcon,
  CubeIcon,
  CodeIcon,
  BroadcastIcon,
  SparkleIcon,
  StackIcon,
  VideoCameraIcon,
  LightningIcon,
];

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-wrap">
        <div className="about-panel">
          <div>
            <span className="eyebrow">02 / The toolkit</span>
            <h2>
              Curious by
              <br />
              <em>default.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I build the parts of a product people feel first: the speed of a
              live classroom, the confidence of a cited answer, and the calm of
              a system that knows how to recover.
            </p>
            <p>
              At GoEnglishX, I own frontend architecture, Core Web Vitals, and
              mentoring while shipping real-time LMS surfaces and human-reviewed
              LLM experiences.
            </p>
            <a className="text-link" href={profile.resumeHref} download>
              Read my resume
              <ArrowUpRightIcon size={15} weight="regular" />
            </a>
          </div>
        </div>
        <div className="skill-grid">
          {featuredSkills.map((skill, i) => {
            const Icon = icons[i];
            return (
              <div className="skill" key={skill.n}>
                <span>{skill.n}</span>
                <strong>{skill.label}</strong>
                <Icon size={16} weight="regular" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
