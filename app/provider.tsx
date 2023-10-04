'use client'
import React from 'react'
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";




export default function Provider({  children,
}: {
  children: React.ReactNode}) {
    const tawkMessengerRef: any = useRef();

  return (
    <>
    <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID}
        ref={tawkMessengerRef}
      />
      {children}
    </>
  )
}
