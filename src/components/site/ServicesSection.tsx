import { services } from "@/lib/site.config";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section id="services" className={`section-pad ${styles.section}`}>
      <div className="container-wide">
        <div className={styles.inner}>
          <div className={styles.sticky}>
            <span className="eyebrow">Our services</span>
            <h2 className="heading-2 mt-3">
              Comprehensive end-to-end services.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We eliminate the stress of international relocation by managing
              every phase of your enrollment and transition smoothly.
            </p>
          </div>

          <ol className={styles.list}>
            {services.map((s) => (
              <li key={s.number} className={styles.item}>
                <span className={styles.number}>{s.number}</span>
                <h3 className={styles.itemTitle}>{s.title}</h3>
                <p className={styles.itemBody}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
