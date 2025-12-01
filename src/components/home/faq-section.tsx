
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of services do you offer?",
    answer:
      "I offer a range of services including web design, full-stack web development, and AI/ML integration. My goal is to create beautiful, functional, and intelligent digital experiences.",
  },
  {
    question: "What is your development process?",
    answer:
      "My process is collaborative and iterative. It typically starts with a discovery phase to understand your goals, followed by design, development, and testing. I believe in regular communication to ensure the final product meets your expectations.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have experience with Python for AI/ML development. I also work with Next.js, Django, and various other modern web technologies.",
  },
  {
    question: "How can I get started on a project with you?",
    answer:
      "The best way to start is by getting in touch through the contact form on my website. We can schedule a call to discuss your project in detail and see if we're a good fit.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Here are some common questions about my work and process.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
