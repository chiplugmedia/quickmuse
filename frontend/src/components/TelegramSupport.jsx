import { TELEGRAM_HANDLE } from "@/lib/constants";

export default function TelegramSupport({
  username = TELEGRAM_HANDLE,
}) {
  return (
    <>
      <style>{`
        .telegram-widget-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          font-family: inherit;
        }

        .telegram-support-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: linear-gradient(135deg, #800021 0%, #a3002a 100%);
          color: #f6e6ce;
          padding: 9px 16px;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
          box-shadow: 0 6px 20px rgba(128, 0, 33, 0.4), 0 0 0 1px rgba(246, 230, 206, 0.15) inset;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
        }

        .telegram-support-btn:hover {
          transform: translateY(-2px) scale(1.03);
          background: linear-gradient(135deg, #960027 0%, #b80030 100%);
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(128, 0, 33, 0.55), 0 0 0 1px rgba(246, 230, 206, 0.3) inset;
        }

        .icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .telegram-icon {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        .online-badge {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border: 1.5px solid #800021;
          border-radius: 50%;
          position: absolute;
          top: -2px;
          right: -2px;
        }
      `}</style>

      <div className="telegram-widget-container">
        <a
          href={`https://t.me/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-support-btn"
          aria-label="Contact QuickMuse Support on Telegram"
        >
          <div className="icon-wrapper">
            <svg className="telegram-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.18-1.82 6.97-3.02 8.37-3.61 3.98-1.66 4.81-1.95 5.35-1.96.12 0 .38.03.55.17.14.12.18.28.2.4.02.12.02.26 0 .39z" />
            </svg>
            <span className="online-badge" />
          </div>
          <span>Support Desk</span>
        </a>
      </div>
    </>
  );
}
