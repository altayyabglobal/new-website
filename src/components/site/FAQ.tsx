import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site.config";

export function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="eyebrow">Frequently asked</span>
          <h2 className="heading-2 mt-3">Quick answers before you apply.</h2>
        </div>

        <Accordion multiple={false} className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
