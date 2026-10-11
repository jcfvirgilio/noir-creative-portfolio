"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#manifesto", label: "Manifesto", n: "01" },
  { href: "#capabilities", label: "Capabilities", n: "02" },
  { href: "#work", label: "Studies", n: "03" },
  { href: "#process", label: "Process", n: "04" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header container">
      <a href="#home" className="wordmark" aria-label="NOIR, back to top" onClick={close}>Noir<span aria-hidden="true">.</span></a>
      <nav id="main-nav" className={`nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
        {links.map(l => <a key={l.href} href={l.href} onClick={close}><span className="mono">{l.n}</span>{l.label}</a>)}
        <a href="#contact" className="nav-cta" onClick={close}>Contact <ArrowUpRight size={14} aria-hidden="true" /></a>
      </nav>
      <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
