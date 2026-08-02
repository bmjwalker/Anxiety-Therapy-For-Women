"use client";

import { useEffect, useRef } from "react";

/**
 * Kit (ConvertKit) form embeds locate themselves in the DOM via their
 * data-uid attribute and insert the rendered form as a sibling. Loading
 * the script through next/script detaches it from its JSX position, so
 * the form ends up appended wherever Next placed the script tag (in this
 * case, at the end of <body>) instead of here. Inserting the script
 * manually into a ref'd container keeps it — and the form Kit injects
 * next to it — anchored to this exact spot on the page.
 */
export default function KitEmbedForm({
  dataUid,
  src,
}: {
  dataUid: string;
  src: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = dataUid;
    script.src = src;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [dataUid, src]);

  return <div ref={containerRef} />;
}
