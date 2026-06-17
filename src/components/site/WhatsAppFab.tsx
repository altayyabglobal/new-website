import { waLink } from "@/lib/whatsapp";
import styles from "./WhatsAppFab.module.css";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Asalamu alaikum, I'd like to know about MBBS / Engineering in Bangladesh.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={`${styles.fab} animate-brand-pulse`}
    >
      <span className={styles.iconWrap} aria-hidden>
        <svg
          viewBox="0 0 32 32"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.99 2.722.99.36 0 1.466-.077 1.787-.572.245-.36.245-.69.245-1.06v-.087c-.025-.25-.025-.498-.125-.66-.215-.376-1.146-.677-1.518-.776zM16.515 0a15.34 15.34 0 0 0-15.27 16.235l-1.245 4.06 4.1-1.288A15.36 15.36 0 0 0 31.788 16.16 15.35 15.35 0 0 0 16.515 0zm0 27.96a12.7 12.7 0 0 1-6.5-1.798l-4.7 1.478 1.5-4.555a12.7 12.7 0 1 1 9.7 4.876z" />
        </svg>
      </span>
      <span className={styles.labelDesktop}>Chat on WhatsApp</span>
    </a>
  );
}
