"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Asterisk, ArrowRight, Menu, X } from "lucide-react";

const works = [
  { id: "01", category: "Digital identity / 2026", name: "MONOFORM", kind: "Brand & digital", style: "mono" },
  { id: "02", category: "Art direction / 2026", name: "AURA OBJECTS", kind: "Digital experience", style: "aura" },
  { id: "03", category: "Concept / 2026", name: "STILL / MOTION", kind: "Interactive concept", style: "still" }
];

function Reveal({ children, className = "" }: {children: React.ReactNode; className?: string}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal is-visible-fallback ${className}`}>{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "America/Mexico_City", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    update(); const t = setInterval(update, 60_000); return () => clearInterval(t);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <div className="announcement"><span className="signal"/> AVAILABLE FOR SELECT PROJECTS <span className="announcement-right">INDEPENDENT DIGITAL STUDIO · 2026</span></div>
    <header className="site-header container">
      <a href="#home" className="wordmark" aria-label="Noir Studio, home" onClick={closeMenu}>n<span className="logo-star">✳</span>ir<span className="wordmark-dot">.</span></a>
      <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`} aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work <span>03</span></a>
        <a href="#about" onClick={closeMenu}>Studio</a>
        <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14}/></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section id="home" className="hero container">
      <div className="hero-intro"><span className="eyebrow"><Asterisk size={13}/> INDEPENDENT DIGITAL PRACTICE</span><span>DESIGN-LED. DETAIL-OBSESSED.</span></div>
      <div className="hero-heading-wrap"><h1 className="hero-title">DIGITAL<br/><span className="title-outline">FEELS</span> <em>different.</em></h1>
        <div className="hero-art" aria-hidden="true"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-glow"/><div className="art-object"><div className="art-shine"/></div><span className="art-index">FIG. 01 / FORM STUDY</span></div>
      </div>
      <div className="hero-bottom"><div className="hero-description"><span className="bullet">✳</span><p>We craft ambitious digital spaces where strong ideas meet thoughtful engineering.</p></div><a href="#work" className="round-link" aria-label="Explore work"><ArrowDownRight size={26}/></a></div>
      <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><span>BASED ON EARTH · <span suppressHydrationWarning>CDMX {time}</span></span></div>
    </section>

    <section id="work" className="work-section section-padding"><div className="container">
      <Reveal><div className="section-top"><span className="eyebrow"><span className="section-marker"/> (01) SELECTED EXPLORATIONS</span><span className="section-aside">A COLLECTION OF SELF-INITIATED DESIGN STUDIES</span></div>
      <div className="section-heading"><h2>WORK THAT<br/><i>speaks.</i></h2><p>We believe the best digital experiences don’t just look good. They leave something behind.</p></div></Reveal>
      <div className="projects">{works.map(work => <Reveal key={work.id} className="project-reveal"><article className="project">
        <div className={`project-visual visual-${work.style}`}>
          {work.style === "mono" && <div className="mono-art"><div className="mono-pill"/><div className="mono-number">M<span>°</span></div><div className="mono-caption">A NEW FORM OF ESSENTIAL.</div></div>}
          {work.style === "aura" && <div className="aura-art"><div className="aura-ring ring-a"/><div className="aura-ring ring-b"/><div className="aura-core"/><span>AURA / STUDY 002</span></div>}
          {work.style === "still" && <div className="still-art"><div className="still-shape"><span>MOVE<br/>WITH<br/>INTENT<span className="still-period">.</span></span></div><span className="still-side">FORM / FUNCTION / FEELING</span></div>}
          <span className="project-badge">CONCEPT PROJECT</span><span className="project-link-icon"><ArrowUpRight size={20}/></span>
        </div>
        <div className="project-meta"><div><span className="project-index">{work.id} / {work.category}</span><h3>{work.name}</h3></div><span className="project-kind">{work.kind}</span></div>
      </article></Reveal>)}</div>
    </div></section>

    <section id="about" className="about-section section-padding"><div className="container"><Reveal>
      <div className="section-top"><span className="eyebrow"><span className="section-marker"/> (02) THE APPROACH</span><span className="section-aside">WHY WE MAKE WHAT WE MAKE</span></div>
      <div className="about-grid"><div><h2>LESS<br/>ORDINARY.<br/><em>More feeling.</em></h2></div><div className="about-copy"><span className="asterisk-big">✳</span><p>Great digital work starts with curiosity. We combine considered visual design, purposeful motion and modern technology to create experiences that feel unmistakably alive.</p><div className="capabilities"><span>CREATIVE DEVELOPMENT</span><span>DIGITAL ART DIRECTION</span><span>INTERACTIVE EXPERIENCES</span><span>DESIGN SYSTEMS</span></div></div></div>
    </Reveal></div></section>

    <section id="contact" className="contact-section"><div className="container"><Reveal>
      <div className="contact-top"><span className="eyebrow"><span className="section-marker"/> (03) WHAT'S NEXT?</span><span>HAVE SOMETHING INTERESTING IN MIND?</span></div>
      <p className="contact-pretitle">GOOD THINGS START WITH A CONVERSATION.</p><a className="contact-heading" href="mailto:hello@example.com?subject=Let's%20build%20something"><span>LET'S MAKE</span><span>IT <em>matter.</em> <ArrowUpRight className="contact-arrow" strokeWidth={1.5}/></span></a>
      <p className="contact-note">This is a fictional creative studio made as a frontend portfolio concept. Replace the email before publishing.</p>
    </Reveal>
    <footer className="footer"><a className="footer-brand" href="#home">n<span>✳</span>ir.</a><span>CONCEPT PROJECT / BUILT WITH NEXT.JS</span><a href="#home">BACK TO TOP <ArrowRight size={15}/></a></footer>
    </div></section>
  </main>;
}
