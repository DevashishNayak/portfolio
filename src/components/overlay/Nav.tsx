"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { profile } from "@/content/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <div className="nav">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden>
            ✦
          </span>
          {profile.name}
        </a>
        <nav aria-label="Primary" className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-resume" href={profile.resumeHref} download>
          Resume
        </a>
        <button
          type="button"
          className="mobile-menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <XIcon size={16} weight="regular" />
          ) : (
            <ListIcon size={16} weight="regular" />
          )}
          <span className="sr-only">Menu</span>
        </button>
        {open ? (
          <div id="mobile-nav" className="mobile-panel">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={profile.resumeHref} download onClick={() => setOpen(false)}>
              Resume
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
