interface Gtag {
  (command: 'config', targetId: string, config: Gtag.Config): void
  (command: 'event', action: string, eventParams: Gtag.EventParams): void
}

declare global {
  interface Window {
    gtag: Gtag
  }
}

export {}
