import ExperienceSection from "@/components/about/ExperienceSection";
import DashedLine from "@/components/common/DashedLine";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/contact/ContactSection";

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <DashedLine className="w-full my-10 md:my-20" />
      <ExperienceSection />
      <DashedLine className="w-full my-10 md:my-20" />
      <ContactSection />
    </>
  );
}
