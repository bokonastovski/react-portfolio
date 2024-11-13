// src/global.d.ts or src/types/global.d.ts
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
