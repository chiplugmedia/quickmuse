import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPage from "@/components/PrivacyPage";
import { useTheme } from "@/context/ThemeContext";

export default function Privacy() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 antialiased ${
        isDarkMode ? "bg-[#24000a] text-[#f6e6ce]" : "bg-[#f6e6ce] text-[#24000a]"
      }`}
    >
      <Helmet>
        <title>Privacy Policy | QuickMuse AI Network</title>
        <meta
          name="description"
          content="Review the privacy policy and data governance practices of QuickMuse AI Network, detailing contributor protection and secure payout routing."
        />
      </Helmet>

      <Header />
      <PrivacyPage />
      <Footer />
    </div>
  );
}
