"use client";

import {
  ArrowUpRightIcon,
  EnvelopeSimpleIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { profile } from "@/content/profile";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrap contact-inner">
        <div>
          <span className="eyebrow">04 / Say hello</span>
          <h2>
            Have a good
            <br />
            <em>feeling?</em>
          </h2>
          <p className="contact-lede">
            Tell me a little about what you&apos;re working on. Good things tend
            to start with a simple hello.
          </p>
          <div className="social-links">
            <a href={`mailto:${profile.email}`}>
              <EnvelopeSimpleIcon size={17} weight="regular" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogoIcon size={17} weight="regular" />
              LinkedIn
            </a>
            <a href={profile.resumeHref} download>
              <ArrowUpRightIcon size={17} weight="regular" />
              Resume
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" required placeholder="Your name" autoComplete="name" />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
            />
          </label>
          <label>
            What&apos;s on your mind?
            <textarea
              name="message"
              required
              rows={3}
              placeholder="A new project, a question, a hello..."
            />
          </label>
          <button className="button-primary" type="submit">
            Send message
            <ArrowUpRightIcon size={17} weight="regular" />
          </button>
          {sent ? (
            <p className="form-status" role="status">
              Opening your email client.
            </p>
          ) : null}
        </form>
      </div>
      <footer className="section-wrap site-footer">
        <span>{profile.name}</span>
        <a href="#top">Back to top</a>
        <span>Built for the work that has to feel right</span>
      </footer>
    </section>
  );
}
