import { site } from "./site.config";

export function waLink(message: string) {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
}
