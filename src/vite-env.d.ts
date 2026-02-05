/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY: string
  readonly VITE_EMAIL_TO: string
  readonly VITE_EMAIL_FROM: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
