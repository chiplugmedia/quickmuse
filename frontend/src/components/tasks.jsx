import { useTheme } from "@/context/ThemeContext";

const CONTRIBUTIONS_ROW_1 = [
  "Prompt Engineering",
  "AI Memory Training",
  "Human Feedback",
  "Conversation Testing",
  "Response Evaluation",
  "Data Annotation",
  "Reasoning Analysis",
  "Knowledge Validation",
  "AI Alignment",
  "Language Intelligence",
];

const CONTRIBUTIONS_ROW_2 = [
  "Earn Rewards",
  "Train AI Systems",
  "Improve AI Memory",
  "Build Better Responses",
  "Contribute To Innovation",
  "Human Intelligence",
  "Generative AI",
  "Digital Opportunities",
  "Future Technology",
  "Exist Beyond The Moment",
];

export default function TasksSection() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 transition-colors duration-500 border-t border-b ${
        isDarkMode
          ? "bg-[#24000a] text-[#f6e6ce] border-[#800021]/30"
          : "bg-[#f6e6ce] text-[#24000a] border-[#800021]/15"
      }`}
    >
      <div className="relative z-10">
        {/* Section Tag */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md transition-colors ${
              isDarkMode
                ? "border-[#800021]/50 bg-[#800021]/15 text-[#f6e6ce]"
                : "border-[#800021]/30 bg-white/70 text-[#800021]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#800021] animate-pulse" />
            <span>Active Contributor Disciplines</span>
          </div>
        </div>

        {/* Marquee Row 1 */}
        <div className="relative overflow-hidden w-full py-2">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...CONTRIBUTIONS_ROW_1, ...CONTRIBUTIONS_ROW_1, ...CONTRIBUTIONS_ROW_1].map(
              (item, index) => (
                <div
                  key={index}
                  className="
                    shrink-0
                    px-6
                    py-3
                    rounded-full
                    bg-gradient-to-r
                    from-[#800021]
                    to-[#a8002b]
                    text-[#f6e6ce]
                    font-semibold
                    text-xs
                    sm:text-sm
                    shadow-lg
                    shadow-[#800021]/25
                    border
                    border-[#800021]/40
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="relative mt-4 overflow-hidden w-full py-2">
          <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
            {[...CONTRIBUTIONS_ROW_2, ...CONTRIBUTIONS_ROW_2, ...CONTRIBUTIONS_ROW_2].map(
              (item, index) => (
                <div
                  key={index}
                  className={`
                    shrink-0
                    px-6
                    py-3
                    rounded-full
                    border
                    backdrop-blur-md
                    font-semibold
                    text-xs
                    sm:text-sm
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      isDarkMode
                        ? "bg-[#800021]/20 border-[#800021]/40 text-[#f6e6ce]"
                        : "bg-white/80 border-[#800021]/25 text-[#24000a]"
                    }
                  `}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
