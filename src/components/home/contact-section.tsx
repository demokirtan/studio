import { ContactForm } from "@/app/contact/contact-form";
import { AtSign, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <div id="contact" className="fade-in">
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-32 lg:px-8">
        <section className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Let’s create something special. Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col justify-center space-y-6">
                <a href="mailto:kirtan6189@gmail.com" className="flex items-center space-x-4 group">
                    <AtSign className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                        <p className="text-lg font-semibold">Email</p>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors break-all">kirtan6189@gmail.com</p>
                    </div>
                </a>
                <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-muted-foreground" />
                    <div>
                        <p className="text-lg font-semibold">Phone</p>
                        <p className="text-muted-foreground">+91 7621987245</p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <ContactForm />
            </div>
        </div>
      </div>
    </div>
  );
}
