import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="md:min-h-[calc(100dvh-var(--nav-h))] scroll-mt-nav-h container grid md:grid-cols-2"
    >
      <div>
        <h1 className="text-h1">About Me</h1>
      </div>
      <div>
        <h3 className="text-h3">
          I’m a software engineer specializing in web and mobile development.
        </h3>
        <p className="text-body-medium mt-4">
          I build applications using Laravel, React, React Native, Next.js, and
          modern JavaScript technologies. I focus on accessibility, performance,
          and maintainable code. I enjoy solving problems and continuously
          learning to improve my skills. Outside of development, I enjoy
          exploring new ideas and technologies.
        </p>
        <Button
          variant="link"
          size="link"
          className="mt-14 uppercase underline"
          asChild
        >
          <Link href="/about">More about me</Link>
        </Button>
      </div>
    </section>
  );
}
