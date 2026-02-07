import AboutSection from "@/components/home/AboutSection";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="md:min-h-[calc(100dvh-var(--nav-h))] md:px-12 scroll-mt-nav-h place-items-center container grid md:grid-cols-2"
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
      </div>
    </section>
  );
}
