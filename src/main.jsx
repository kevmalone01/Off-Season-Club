import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Instagram,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import "./styles.css";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.28 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.09 } },
  viewport: { once: true, amount: 0.2 },
};

const item = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  return (
    <main className="site-shell">
      <FloatingVisuals />
      <Hero />
      <SummerVisualSection />
      <VisualCards />
      <MykonosMap />
      <AboutTeam />
      <Footer />
    </main>
  );
}

function FloatingVisuals() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="glow glow-c" />
      <div className="line-field" />
      <div className="sun-haze" />
      <div className="wave-field" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-pad">
      <motion.div className="hero-copy" {...fadeUp}>
        <div className="badge-row">
          <VisualBadge icon={ShieldCheck} label="Pro-Level Training" />
          <VisualBadge icon={Sparkles} label="Pre-Season Ready" />
        </div>
        <p className="eyebrow">Exclusive off-season preparation training</p>
        <h1 className="hero-title">
          <span className="hero-title-line">Off-Season</span>
          <span className="hero-title-line">Club</span>
        </h1>
        <p className="lead">
          Exclusive small-group training on the pitch with speed, athletic and
          nutrition planning, built to help players use the off-season and start
          the new season ready.
        </p>
        <div className="hero-actions">
          <a
            href="mailto:info@offseasonclub.com?subject=Training%20inquiry%20-%20Off-Season%20Club"
            className="primary-cta"
          >
            Send training inquiry <ArrowRight size={18} />
          </a>
          <a href="#locations" className="secondary-cta">
            View impressions
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96, rotateX: 5 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="image-collage">
          <div className="image-tile pitch" />
          <div className="image-tile gym" />
          <div className="image-tile sea" />
          <div className="image-tile recovery" />
          <motion.div
            className="scanner-line"
            animate={{ x: ["-22%", "122%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="floating-stat stat-one">
          <Gauge size={18} />
          <strong>94</strong>
          <span>Readiness</span>
        </div>
        <div className="floating-stat stat-two">
          <Zap size={18} />
          <strong>32.1</strong>
          <span>km/h peak</span>
        </div>
      </motion.div>
    </section>
  );
}

function VisualBadge({ icon: Icon, label }) {
  return (
    <span className="visual-badge">
      <Icon size={15} />
      {label}
    </span>
  );
}

function SummerVisualSection() {
  const visuals = [
    {
      className: "summer-pitch",
      image: "/off-season-graphics/01_pitchtraining_graphic_no_text.png",
      label: "Pitch Training",
      text: "On-pitch sessions with technique and tempo, individual for each player based on position.",
    },
    {
      className: "summer-shore",
      image: "/off-season-graphics/02_gym_strength_graphic_no_text.png",
      label: "Gym & Strength",
      text: "Gym and strength training for power, stability and athletic development.",
    },
    {
      className: "summer-base",
      image: "/off-season-graphics/03_nutrition_planning_graphic_no_text.png",
      label: "Nutrition Planning",
      text: "Season-ready nutrition planning with fueling, hydration and routines.",
    },
  ];

  return (
    <section className="section-pad summer-section" id="training">
      <motion.div className="section-heading" {...fadeUp}>
        <p className="eyebrow">Summer off-season setting</p>
        <h2>Training Blocks</h2>
        <p className="section-intro">
          We build an individual training plan for every player based on their
          position, strengths and development areas. The goal is simple: arrive
          prepared, sharper and ready for the next season.
        </p>
      </motion.div>
      <motion.div className="summer-gallery" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}>
        {visuals.map(({ className, image, label, text }) => (
          <motion.article className={`summer-card glass-card ${className}`} variants={item} key={label}>
            <div className="training-graphic" aria-hidden="true">
              <img src={image} alt="" loading="lazy" />
            </div>
            <div className="summer-card-copy">
              <span>{label}</span>
              <p>{text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function VisualCards() {
  return (
    <section className="section-pad program-text-section">
      <motion.div className="program-copy-card glass-card" {...fadeUp}>
        <p className="eyebrow">Off-season edge</p>
        <h2 className="statement-line">
          Most players regret not being prepared when the season starts.
        </h2>
        <p>
          This is your chance to be one step ahead of the competition.
        </p>
        <strong>Start to stand out. Start prepared.</strong>
      </motion.div>
    </section>
  );
}

function MykonosMap() {
  const [activeImpression, setActiveImpression] = React.useState(0);
  const impressions = [
    {
      title: "On-pitch training",
      text: "Technical work, speed actions and position-specific sessions.",
      detail:
        "A visual look into the pitch work: individual technical details, position-specific actions and football situations built around the player's role.",
      image: "/impressions/pitch-sunset-offseasonclub.png",
      position: "center 58%",
    },
    {
      title: "Gym & strength",
      text: "Power, stability and athletic preparation for the season.",
      detail:
        "The athletic block connects strength, stability and speed qualities with what the player needs on the pitch during pre-season.",
      image: "/impressions/gym-summer-offseasonclub.png",
      position: "center 56%",
    },
    {
      title: "Nutrition planning",
      text: "Fueling, hydration and routines players can carry into pre-season.",
      detail:
        "Nutrition is used as a practical support system: daily habits, fueling rhythm and simple routines players can keep after the camp.",
      image: "/off-season-graphics/03_nutrition_planning_graphic_no_text.png",
      position: "center 44%",
    },
  ];
  const active = impressions[activeImpression];
  const nextImpression = () =>
    setActiveImpression((current) => (current + 1) % impressions.length);
  const previousImpression = () =>
    setActiveImpression(
      (current) => (current - 1 + impressions.length) % impressions.length,
    );

  return (
    <section className="section-pad impressions-section" id="locations">
      <motion.div className="section-heading" {...fadeUp}>
        <p className="eyebrow">Club impressions</p>
        <h2>Inside the training</h2>
        <p className="section-intro">
          This section shows impressions from our latest off-season club.
        </p>
      </motion.div>
      <motion.div className="impression-slider" {...fadeUp}>
        <div className="impression-media">
          <motion.img
            key={active.image}
            src={active.image}
            alt={active.title}
            style={{ objectPosition: active.position }}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <aside className="impression-panel">
          <div className="impression-copy">
            <span>
              {String(activeImpression + 1).padStart(2, "0")} /{" "}
              {String(impressions.length).padStart(2, "0")}
            </span>
            <h3>{active.title}</h3>
            <p>{active.text}</p>
            <p className="impression-detail">{active.detail}</p>
          </div>
          <div className="impression-controls" aria-label="Impression controls">
            <button type="button" onClick={previousImpression} aria-label="Previous impression">
              <ChevronLeft size={22} />
            </button>
            <div className="impression-dots">
              {impressions.map(({ title }, index) => (
                <button
                  type="button"
                  className={index === activeImpression ? "is-active" : ""}
                  onClick={() => setActiveImpression(index)}
                  aria-label={`Show ${title}`}
                  aria-pressed={index === activeImpression}
                  key={title}
                />
              ))}
            </div>
            <button type="button" onClick={nextImpression} aria-label="Next impression">
              <ChevronRight size={22} />
            </button>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}

function AboutTeam() {
  const team = [
    {
      name: "Kevin Malone",
      role: "Project development & organization",
      imageClass: "team-photo-kevin",
    },
    {
      name: "Lorenz Rechkemmer",
      role: "Athletic & strength coach, nutrition expert",
      imageClass: "team-photo-lorenz",
    },
    {
      name: "Daniel Biermann",
      role: "Individual football trainer",
      imageClass: "team-photo-daniel",
    },
  ];

  return (
    <section className="section-pad team-section" id="team">
      <motion.div className="section-heading" {...fadeUp}>
        <p className="eyebrow">About us</p>
        <h2>The team behind the club</h2>
      </motion.div>
      <motion.div className="team-grid" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}>
        {team.map(({ name, role, imageClass }, index) => (
          <motion.article className="team-card glass-card" variants={item} key={name}>
            <div className={`team-photo ${imageClass}`} aria-hidden="true" />
            <span className="team-index">0{index + 1}</span>
            <h3>{name}</h3>
            <p>{role}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>Off-Season Club</span>
          <p>Exclusive off-season preparation training.</p>
        </div>
        <nav className="footer-links" aria-label="Footer links">
          <a href="https://www.instagram.com/offseasonclub" target="_blank" rel="noreferrer">
            <Instagram size={18} />
            Instagram
          </a>
          <a href="mailto:info@offseasonclub.com">
            <Mail size={18} />
            info@offseasonclub.com
          </a>
          <a href="/datenschutz.html">Privacy Policy</a>
          <a href="/impressum.html">Legal Notice</a>
        </nav>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
