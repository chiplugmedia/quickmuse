import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsPage from "@/components/TermsPage";
import { useTheme } from "@/context/ThemeContext";

export default function Terms() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 antialiased ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      <Helmet>
        <title>Terms & Conditions | QuickMuse AI Network</title>
        <meta
          name="description"
          content="Review the terms and conditions for participating in QuickMuse AI network training, remote tasks, and reward payout distribution."
        />
      </Helmet>

      <Header />
      <TermsPage />
      <Footer />
    </div>
  );
}
