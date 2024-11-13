// src/global.d.ts or src/types/global.d.ts
export {};

declare global {
  interface Window {
    dataLayer: any[]; // You can use any[] here for flexibility or define a more specific type if needed
    gtag: (...args: any[]) => void;
  }
}
