import { useEffect } from "react";

export default function AdSense() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3572501944615798"
      data-ad-slot="3170144072"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}