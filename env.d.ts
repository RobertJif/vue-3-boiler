/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REMOTE_PATH_SHE_UI: string;
  readonly VITE_REMOTE_PATH_AM_UI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
