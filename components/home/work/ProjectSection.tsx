import DashedLine from "@/components/common/DashedLine";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WorkVoteLottie from "./WorkVoteLottie";

export default function ProjectSection() {
  return (
    <section
      id="work"
      className="md:min-h-[calc(100dvh-var(--nav-h))] scroll-mt-nav-h container"
    >
      <h1 className="text-h1">Featured Projects</h1>
      <p className="text-body-medium">
        Here are some of the selected projects that showcase my passion for
        <br />
        front-end development.
      </p>

      <div className="md:mt-20 mt-16 grid md:grid-cols-2 gap-10 md:gap-0">
        <div className="rounded-3xl border h-85 md:h-150">
          <WorkVoteLottie />
        </div>
        <div className="md:pl-12 self-center">
          <h3 className="text-h3">VoteApp (University Academic Project)</h3>
          <p className="text-body mt-4">
            VoteApp is a university project voting application that allows users
            to participate in polls and cast votes securely. Built with Java and
            Kotlin, the app focuses on user interaction, application logic, and
            real-time updates. This project helped me develop fundamental skills
            in mobile app development, event handling, and UI design.
          </p>

          <h5 className="mt-8 text-h5">Project Info</h5>
          <DashedLine className="my-4 w-full" />
          <div className="flex items-center justify-between">
            <p className="text-body-small text-white">Year</p>
            <p className="text-body-small">2019</p>
          </div>
          <DashedLine className="my-4 w-full" />
          <div className="flex items-center justify-between">
            <p className="text-body-small text-white">Role</p>
            <p className="text-body-small">App Developer</p>
          </div>
          <DashedLine className="my-4 w-full" />

          <Button
            variant="link"
            size="link"
            className="uppercase underline"
            asChild
          >
            <Link
              href="https://github.com/WinKoKoNaing/VoteApp"
              target="_blank"
            >
              SEE ON Github
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
