import { DotIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "../ui/button";
import { contact } from "./utils/constant";
import HeroAnimation from "./HeroAnimation";
import ScrollTo from "../common/navbar/scrollTo";
import AnimatedGradientText from "../common/AnimatedGradientText";

export default function HeroSection() {
  return (
    <section
      id="#main"
      className="min-h-[calc(100dvh-var(--nav-h)) scroll-mt-100 container grid md:grid-cols-2 place-items-center gap-20"
    >
      <div>
        <h1 className="text-h1">
          <AnimatedGradientText>hi, i am</AnimatedGradientText>
          <br />
          <AnimatedGradientText>Win Ko Ko Naing</AnimatedGradientText>
        </h1>
        <p className="text-body-medium mt-2">
          A software engineer passionate about building scalable, user-friendly
          web and mobile applications.
        </p>
        <p className="text-body-medium">
          I focus on{" "}
          <span className="text-primary animate-pulse-text font-bold">
            accessibility
          </span>
          ,{" "}
          <span className="text-primary animate-pulse-text font-bold">
            performance
          </span>
          , and{" "}
          <span className="text-primary animate-pulse-text font-bold">
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
      <div className="md:min-h-125 flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroAnimation />
        </Suspense>
      </div>
    </section>
  );
}
