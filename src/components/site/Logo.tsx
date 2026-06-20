import Image from "next/image";
import { site } from "@/lib/site.config";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt={site.name}
        width={200}
        height={65}
        className="h-10 w-auto object-contain"
        priority
      />
    </a>
  );
}
