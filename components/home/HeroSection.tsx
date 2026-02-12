import { DotIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "../ui/button";
import { contact } from "./utils/constant";
import HeroAnimation from "./HeroAnimation";
import ScrollTo from "../common/navbar/scrollTo";

export default function HeroSection() {
  return (
    <section
      id="#main"
      className="min-h-[calc(100dvh-var(--nav-h)) scroll-mt-100 container grid md:grid-cols-2 place-items-center gap-20"
    >
      <div>
        <h1 className="text-h1 bg-linear-to-r from-[#d3e97a] via-[#a3c75a] to-[#f0f8b0] bg-clip-text text-transparent animate-gradient-x">
          hi, i am
          <br />
          Win Ko Ko Naing
        </h1>
        <p className="text-body-medium mt-2">
          A software engineer passionate about building scalable, user-friendly
          web and mobile applications.
        </p>
        <p className="text-body-medium">
          I focus on{" "}
          <span className="text-[#d3e97a] animate-pulse-text">
            accessibility
          </span>
          ,{" "}
          <span className="text-[#d3e97a] animate-pulse-text">performance</span>
          , and{" "}
          <span className="text-[#d3e97a] animate-pulse-text">
            maintainable code
          </span>
          .
        </p>
        <div className="mt-10 flex flex-row items-center gap-4">
          <Button size="lg" asChild>
            <ScrollTo
              href="#contact"
              className="flex-row flex items-center gap-1"
            >
              Contact Me <DotIcon strokeWidth={10} />
            </ScrollTo>
          </Button>

          <Button variant="outline" size="icon-lg" asChild>
            <Link href={contact.linkedin} target="_blank">
              <LinkedinIcon className="stroke-primary size-6" />
            </Link>
          </Button>
          <Button variant="outline" size="icon-lg" asChild>
            <Link href={contact.github} target="_blank">
              <GithubIcon className="stroke-primary size-6" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="md:min-h-125">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroAnimation />
        </Suspense>
      </div>
    </section>
  );
}
