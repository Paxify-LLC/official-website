"use client";

import Demonstration from "@/components/Demonstration/demonstration";
import Features from "@/components/Features/features";
import Footer from "@/components/Footer/footer";
import Home from "@/components/Home/home";
import Pricing from "@/components/Pricing/pricing";
import Reels from "@/components/Reels/reels";
import Support from "@/components/Support/support";
import { GTM_BODY_IFRAME, GTM_HEAD_SCRIPT } from "@/constants/config";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    const addGTMScriptToHead = () => {
      const gtmScript = document.createElement("script");
      gtmScript.id = "gtm-script";
      gtmScript.src = GTM_HEAD_SCRIPT;
      gtmScript.async = true;

      const head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(gtmScript);
    };

    const addGTMIFrameToBody = () => {
      const noscript = document.createElement("noscript");
      const iframe = document.createElement("iframe");
      iframe.id = "gtm-frame";
      iframe.src = GTM_BODY_IFRAME;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";

      noscript.appendChild(iframe);

      const body = document.body || document.getElementsByTagName("body")[0];
      body.insertBefore(noscript, body.firstChild);
    };

    addGTMScriptToHead();
    addGTMIFrameToBody();
  }, []);

  return (
    <main>
      <Home />
      <Features />
      <Support />
      <Demonstration />
      <Reels />
      <Pricing />
      <Footer />
    </main>
  );
}
