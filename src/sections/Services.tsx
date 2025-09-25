import { site } from "../data/site";
import { motion } from "framer-motion";
import { revealContainer, revealItem, revealFromRight } from "../anim/reveal";


export default function ServicesSection() {
  return (
    <section id="services" className="psy-services section">
      <div className="container">
        <div className="grid anti-hero">
          <h2 className="anti-left">{site.services.heading}</h2>
          <motion.p
            className="lead text-end anti-right"
            variants={revealFromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
          >
            {site.services.intro}
          </motion.p>
        </div>

        <motion.div
          className="psy-cards"
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {site.services.items.map((s) => (
            <motion.article
              key={s.id}
              className={`psy-card ${s.theme === "solid" ? "solid" : "light"}`}
              variants={revealItem}
              whileHover={{ scale: 1.03, transition: { duration: 0.12 } }}
              style={{
                transformOrigin: "top center",
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)", // forza layer GPU, evita snap finale
              }}
            >
              {s.tag && <span className="psy-pill">{s.tag}</span>}
              <p>{s.excerpt}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
