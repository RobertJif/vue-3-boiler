import { initFederation } from "@softarc/native-federation";

(async () => {
  await initFederation({
    "am-ui": import.meta.env.VITE_REMOTE_PATH_AM_UI,
  });
  await initFederation({
    "she-ui": import.meta.env.VITE_REMOTE_PATH_SHE_UI,
  });

  await import("./bootstrap");
})();
