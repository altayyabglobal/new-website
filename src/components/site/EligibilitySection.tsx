import { eligibility } from "@/lib/site.config";
import styles from "./EligibilitySection.module.css";

export function EligibilitySection() {
  return (
    <section className={styles.section}>
      <div className="container-wide">
        <div className={styles.inner}>
          <div className={styles.label}>
            <span className="eyebrow">Eligibility overview</span>
            <h2 className={styles.heading}>Who can apply</h2>
          </div>
          <ul className={styles.list}>
            {eligibility.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.dot} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
