import TelegramSupport from "@/components/TelegramSupport";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <TelegramSupport username="your_actual_telegram_handle" />
      </body>
    </html>
  );
}
