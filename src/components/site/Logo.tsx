import Image from "next/image";
import { site } from "@/lib/site.config";

export function Logo({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) {
  return (
    <a href="#top" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt={site.name}
        width={240}
        height={78}
        className={size === "large" ? "h-16 w-auto object-contain" : "h-12 w-auto object-contain"}
        priority
      />
    </a>
  );
}
