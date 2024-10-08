"use client";

import { useEffect, useRef } from "react";
import { env } from "~/config/env";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "leapa-customer": unknown;
    }
  }
}

export function LeapaWidget() {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
      ref.current?.addEventListener("onSuccess", (event) => {
        console.log(event, "onSuccess");
      });
      ref.current?.addEventListener("onFailure", (event) => {
        console.error(event, "onFailure");
      });

  },[ref])
  return (

    <leapa-customer
      ref={ref}
      mode="add"
      currency="USD"
      amount="1"
      description="Payment demo"
      first-name="true"
      last-name="true"
      source-type="card"
      button-text="Add customer"
      api-key={env.NEXT_PUBLIC_LEAPA_API_KEY}
    />
  );
}

LeapaWidget.displayName = "LeapaWidget";
