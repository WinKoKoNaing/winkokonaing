import HeroSection from "@/components/home/HeroSection";
import dynamic from "next/dynamic";
const AboutSection = dynamic(() => import("@/components/home/AboutSection"), {
  ssr: true,
});
const ProjectSection = dynamic(
  () => import("@/components/home/work/ProjectSection"),
  { ssr: true },
);
const DashedLine = dynamic(() => import("@/components/common/DashedLine"), {
  ssr: true,
});
const ContactSection = dynamic(
  () => import("@/components/home/contact/ContactSection"),
  {
    ssr: true,
  },
);
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DashedLine className="w-full my-10 md:my-20" />
      <ProjectSection />
      <DashedLine className="w-full my-10 md:my-20" />
      <AboutSection />
      <DashedLine className="w-full my-10 md:my-20" />
      <ContactSection />
    </>
  );
}
