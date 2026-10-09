// ---------------------------------------------------------------
// Plans
// ---------------------------------------------------------------
export const PLANS = [
  {
    id: "Trial",
    name: "QuickMuse Trial",
    subscriptionFee: "Subscription Fee",
    price: "$5/₦7,000",
    features: [
      {
        title: "Training Bonus",
        value: "₦5,000",
      },
      {
        title: "Pro Indirect Invite",
        value: "₦200",
      },
      {
        title: "AI Training Commission",
        value: "$8.6/hr",
      },
      {
        title: "AI Remote Jobs",
        value: "$10.2/hr",
        status: "INCONSISTENT",
      },
    ],
    featured: false,
  },

  {
    id: "Premium",
    name: "QuickMuse Premium",
    subscriptionFee: "Subscription Fee",
    price: "$10/₦14,000",
    features: [
      {
        title: "Training Bonus",
        value: "₦11,000",
      },
      {
        title: "Pro Indirect Invite",
        value: "₦500",
      },
      {
        title: "AI Training Commission",
        value: "$16.8/hr",
      },
      {
        title: "AI Remote Jobs",
        value: "$18/hr",
        status: "PRIORITY",
      },
    ],
    featured: true,
  },
];
// ---------------------------------------------------------------
// Payment details
// ---------------------------------------------------------------
// IMPORTANT: Replace these with your real, verified account details
// before deploying. Every signed-up user is shown this SAME account —
// it is not generated per-user. Do not randomize or fabricate bank
// details; only display an account you actually control.
export const BANK_DETAILS = {
  bankName: 'YOUR BANK NAME',
  accountNumber: '0000000000',
  accountName: 'YOUR BUSINESS ACCOUNT NAME',
};

// ---------------------------------------------------------------
// Support / Telegram
// ---------------------------------------------------------------
export const TELEGRAM_HANDLE = 'quickmuse_support';
export const TELEGRAM_URL = `https://t.me/${TELEGRAM_HANDLE}`;
export const TELEGRAM_PREFILLED_URL =
  `${TELEGRAM_URL}?text=${encodeURIComponent(
    "Hello QuickMuse, I have made payment and would like to send my proof of payment. Please activate my account. Thank you!"
  )}`;
