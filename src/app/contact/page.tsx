import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="fade-in">
      <div className="container mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <section className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We'd love to hear
            from you.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground">Email Us</h3>
              <p>hello@noirfoli.io</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Our Studio</h3>
              <p>123 Creative Lane</p>
              <p>Design District, 90210</p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
