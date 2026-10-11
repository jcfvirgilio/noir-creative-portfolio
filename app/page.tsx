import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Header } from "./components/Header";
import { Clock } from "./components/Clock";
import { Monolith } from "./components/Monolith";
import { Reveal, WordReveal } from "./components/Reveal";

const capabilities = [
  { n: "01", title: "Creative direction for AI", text: "Briefs, references and constraints that steer models toward a point of view.", tag: "DIRECTION" },
  { n: "02", title: "Generative visual systems", text: "Repeatable image and motion systems with a consistent material language.", tag: "SYSTEMS" },
  { n: "03", title: "Interactive interfaces", text: "Web experiences where the model's output can be explored, not just viewed.", tag: "INTERACTION" },
  { n: "04", title: "Pipeline & prompt design", text: "Documented workflows so a result can be reproduced, reviewed and refined.", tag: "WORKFLOW" }
];

const studies = [
  { id: "01", name: "MONOFORM", kind: "Generative identity", text: "A dot-matrix identity that resolves from noise into a single mark.", plate: "dots" },
  { id: "02", name: "AURA OBJECTS", kind: "Art direction", text: "Concentric forms studied as light-reactive digital objects.", plate: "rings" },
  { id: "03", name: "STILL / MOTION", kind: "Interactive concept", text: "One still frame that unfolds into motion as the viewer approaches.", plate: "pill" }
];

const steps = [
  { n: "01", title: "Frame", text: "Define the question, the constraints and what must never be generated." },
  { n: "02", title: "Generate", text: "Explore wide with models; keep every branch documented." },
  { n: "03", title: "Edit", text: "A person decides what stays. Most output is discarded." },
  { n: "04", title: "Compose", text: "Assemble the survivors into a considered, accessible experience." }
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#manifesto">Skip to content</a>
      <div className="grid-overlay container" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
      </div>

      <Header />

      <main>
        <section id="home" className="hero container">
          <div className="hero-meta mono">
            <span>(00) CONCEPTUAL AI CREATIVE STUDIO</span>
            <span className="hide-sm">PORTFOLIO CONCEPT — NO REAL CLIENTS</span>
          </div>

          <div className="hero-stage"><Monolith /></div>

          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="line"><span>Machine</span></span>
              <span className="line"><span><em>intelligence,</em></span></span>
              <span className="line"><span>composed.</span></span>
            </h1>
            <div className="hero-foot">
              <p>NOIR is a conceptual studio exploring how artificial intelligence can be directed, edited and given form.</p>
              <a href="#manifesto" className="round-link" aria-label="Scroll to manifesto"><ArrowDownRight size={22} aria-hidden="true" /></a>
            </div>
          </div>

          <div className="hero-base mono">
            <span>SCROLL</span>
            <span>BASED ON EARTH · <Clock /></span>
          </div>
        </section>

        <section id="manifesto" className="section container">
          <Reveal><div className="section-top mono"><span>(01) MANIFESTO</span><span>N 01 / 05</span></div></Reveal>
          <div className="manifesto">
            <WordReveal className="manifesto-text" text="We treat AI as a material, not a shortcut. Models generate; people decide what stays. The work lives in that edit." />
          </div>
        </section>

        <section id="capabilities" className="section container">
          <Reveal><div className="section-top mono"><span>(02) CAPABILITIES</span><span>N 02 / 05</span></div></Reveal>
          <Reveal>
            <ul className="capability-list">
              {capabilities.map(c => (
                <li key={c.n} className="capability">
                  <span className="mono capability-n">{c.n}</span>
                  <h2>{c.title}</h2>
                  <p>{c.text}</p>
                  <span className="mono capability-tag">{c.tag}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section id="work" className="section container">
          <Reveal><div className="section-top mono"><span>(03) STUDIES — ALL CONCEPTUAL</span><span>N 03 / 05</span></div></Reveal>
          <div className="studies">
            {studies.map(s => (
              <Reveal key={s.id} className={`study study-${s.id}`}>
                <figure>
                  <div className={`plate plate-${s.plate}`} aria-hidden="true">
                    {s.plate === "rings" && <><span /><span /><span /><span /></>}
                    <span className="badge mono">CONCEPTUAL</span>
                  </div>
                  <figcaption>
                    <span className="mono muted">{s.id} / {s.kind.toUpperCase()}</span>
                    <h3>{s.name}</h3>
                    <p>{s.text}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="process" className="section container">
          <Reveal><div className="section-top mono"><span>(04) PROCESS</span><span>N 04 / 05</span></div></Reveal>
          <Reveal>
            <ol className="steps">
              {steps.map(s => (
                <li key={s.n}>
                  <span className="mono muted">{s.n}</span>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section id="contact" className="section container contact">
          <Reveal><div className="section-top mono"><span>(05) CONTACT</span><span>N 05 / 05</span></div></Reveal>
          <Reveal>
            <a className="contact-link" href="mailto:hello@example.com?subject=Let's%20talk">
              <span>Let&rsquo;s make</span>
              <span>it <em>matter.</em> <ArrowUpRight className="contact-arrow" strokeWidth={1.25} aria-hidden="true" /></span>
            </a>
            <p className="contact-note mono">FICTIONAL STUDIO · FRONTEND PORTFOLIO CONCEPT · REPLACE THE EMAIL BEFORE PUBLISHING</p>
          </Reveal>
        </section>
      </main>

      <footer className="footer container mono">
        <span>NOIR — CONCEPT PROJECT</span>
        <span>BUILT WITH NEXT.JS</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
