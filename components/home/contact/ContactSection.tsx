import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { contact } from "../utils/constant";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[calc(100dvh-var(--nav-h))] gap-16 scroll-mt-nav-h container grid md:grid-cols-2"
    >
      <div>
        <p className="text-h1">Let’s connect</p>
        <p className="text-body mt-4">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          through any of the platforms below or send me an email. Let’s create
          something amazing together!
        </p>
        <p className="mt-1 text-body-medium">
          Say hello at{" "}
          <a
            href="mailto:wkkn2580@gmail.com"
            className="text-primary underline hover:text-blue-600"
          >
            wkkn2580@gmail.com
          </a>
        </p>
        <div className="mt-10 flex flex-row items-center gap-8 md:gap-4">
          <Button variant="link" size="icon-lg">
            <Link href={contact.linkedin} target="_blank">
              <LinkedinIcon className="stroke-primary size-8" />
            </Link>
          </Button>
          <Button variant="link" size="icon-lg">
            <Link href={contact.github} target="_blank">
              <GithubIcon className="stroke-primary size-8" />
            </Link>
          </Button>
          <Button variant="link" size="icon-lg" asChild>
            <Link href={contact.facebook} target="_blank">
              <FacebookIcon className="stroke-primary size-8" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-end items-start">
        <ContactForm />
      </div>
    </section>
  );
}
