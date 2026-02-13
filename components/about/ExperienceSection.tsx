import React from "react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="md:min-h-[calc(100dvh-var(--nav-h))] scroll-mt-nav-h container grid md:grid-cols-2 gap-8 md:gap-0"
    >
      <div>
        <h1 className="text-h1">My Experience</h1>
      </div>
      <div className="flex flex-col md:gap-20 gap-10">
        <div>
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-h4">Software Engineer</h4>
            <p>Nov 2022 — Present</p>
          </div>
          <p className="text-body-medium text-primary mt-1 md:mt-2 mb-3 md:mb-4">
            Dev Engine Myanmar - Self-employed
          </p>
          <p className="text-body-medium">
            Managed end-to-end software development projects, building web and
            mobile applications using React.js, Next.js, React Native, Expo,
            Laravel, and Node.js. Designed and implemented APIs, integrated
            third-party services, optimized performance, and handled
            deployments. Collaborated with clients to deliver scalable,
            user-friendly solutions aligned with business goals.
          </p>
        </div>

        <div>
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-h4">Full Stack Developer</h4>
            <p>Oct 2020 — Mar 2022</p>
          </div>
          <p className="text-body-medium text-primary mt-1 md:mt-2 mb-3 md:mb-4">
            Ultimate Solutions Myanmar - Full-time
          </p>
          <p className="text-body-medium">
            Developed and maintained web and mobile applications, implementing
            scalable front-end and back-end solutions using Laravel, React.js,
            Next.js, and React Native. Collaborated with teams to design
            features, optimize performance, and ensure seamless deployments,
            delivering user-friendly and high-quality software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
