import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TasksSection from "@/components/tasks";
import HowItWorks from "@/components/HowItWorks";
import Video from "@/components/Video";
import AboutSection from "@/components/aboutus";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 antialiased ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      <Header />
      <Hero />
      <TasksSection />
      <HowItWorks />
      <Video />
      <AboutSection />
      <Plans />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
