import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { BANK_DETAILS, PLANS, TELEGRAM_HANDLE, TELEGRAM_PREFILLED_URL } from "@/lib/constants";

export default function PaymentDetails({ user }) {
  const { isDarkMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const plan = PLANS.find((p) => p.id === user.plan) || PLANS[0];

  async function handleCopy() {
    const text = `Bank: ${BANK_DETAILS.bankName}\nAccount number: ${BANK_DETAILS.accountNumber}\nAccount name: ${BANK_DETAILS.accountName}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 md:p-10 border backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
        isDarkMode
          ? "bg-[#800021]/15 border-[#800021]/40 shadow-[#24000a]/80 text-[#f6e6ce]"
          : "bg-white/80 border-[#800021]/20 shadow-[#800021]/10 text-[#24000a]"
      }`}
    >
      {/* Success Badge & Header */}
      <div className="flex items-center gap-3.5 mb-2">
        <span className="w-10 h-10 rounded-2xl bg-[#800021] text-[#f6e6ce] flex items-center justify-center font-bold text-lg shadow-md shadow-[#800021]/30">
          ✓
        </span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Account Created</h1>
          <p className={`text-xs sm:text-sm mt-0.5 ${isDarkMode ? "text-[#f6e6ce]/60" : "text-[#24000a]/60"}`}>
            Complete your subscription to activate your AI training line.
          </p>
        </div>
      </div>

      {/* User & Plan Summary Box */}
      <div
        className={`rounded-2xl p-5 my-6 border transition-colors ${
          isDarkMode
            ? "bg-[#24000a]/60 border-[#800021]/30 text-[#f6e6ce]"
            : "bg-white/90 border-[#800021]/15 text-[#24000a]"
        }`}
      >
        <div className="flex justify-between items-center text-sm py-2">
          <span className="opacity-70">Subscriber Name</span>
          <span className="font-bold">{user.name || "QuickMuse Member"}</span>
        </div>
        <div className="flex justify-between items-center text-sm py-2 border-t border-inherit">
          <span className="opacity-70">Training Tier</span>
          <span className="font-bold text-[#800021]">{plan?.name}</span>
        </div>
        <div className="flex justify-between items-center text-sm py-2 border-t border-inherit">
          <span className="opacity-70">Activation Fee</span>
          <span className="font-black font-mono text-base">{plan?.price}</span>
        </div>
      </div>

      {/* Bank Transfer Box */}
      <div
        className={`border rounded-2xl p-5 mb-6 transition-colors ${
          isDarkMode
            ? "border-[#800021]/50 bg-[#800021]/20"
            : "border-[#800021]/20 bg-[#800021]/5"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#800021]">
            Bank Transfer Details
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-current opacity-70">
            Instant Routing
          </span>
        </div>

        <div className="mt-4 space-y-2.5 text-sm">
          <div className="flex justify-between items-center">
            <span className="opacity-70">Bank Name</span>
            <span className="font-mono font-bold">{BANK_DETAILS.bankName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="opacity-70">Account Number</span>
            <span className="font-mono font-bold tracking-wider text-base">{BANK_DETAILS.accountNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="opacity-70">Account Name</span>
            <span className="font-mono font-bold text-right">{BANK_DETAILS.accountName}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`w-full mt-5 font-semibold rounded-xl py-3 text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
            copied
              ? "bg-emerald-600 text-white"
              : isDarkMode
              ? "bg-[#f6e6ce] text-[#24000a] hover:bg-white"
              : "bg-[#24000a] text-[#f6e6ce] hover:bg-[#3d0011]"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Bank Details</span>
            </>
          )}
        </button>
      </div>

      {/* Step Instructions */}
      <div
        className={`rounded-2xl p-4 sm:p-5 border text-xs sm:text-sm leading-relaxed mb-6 transition-colors ${
          isDarkMode
            ? "bg-[#24000a]/70 border-[#800021]/30 text-[#f6e6ce]/80"
            : "bg-white/80 border-[#800021]/15 text-[#24000a]/80"
        }`}
      >
        <p className="flex items-start gap-2.5">
          <span className="text-base leading-none">⚡</span>
          <span>
            Once transferred, send your payment receipt to our verification bot on Telegram at{" "}
            <a
              href={`https://t.me/${TELEGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-[#800021]"
            >
              @{TELEGRAM_HANDLE}
            </a>
            . Typical line activation takes under 15 minutes.
          </span>
        </p>
      </div>

      {/* Telegram CTA */}
      <a
        href={TELEGRAM_PREFILLED_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0088cc] to-[#006699] hover:from-[#0077b3] hover:to-[#005580] shadow-lg shadow-[#0088cc]/20 transition-all duration-300 hover:scale-[1.02]"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
        <span>Send Proof on Telegram</span>
      </a>
    </div>
  );
}
