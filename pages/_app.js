import "@/styles/globals.css";
import ThemeComponent from "@core/theme/ThemeComponent";
import {
  SettingsConsumer,
  SettingsProvider,
} from "@core/context/settingsContext";
import { createEmotionCache } from "@core/utils/create-emotion-cache";


import { SessionProvider } from "next-auth/react"


const clientSideEmotionCache = createEmotionCache();
export default function AppApp({
  Component, pageProps: { session, ...pageProps }
}) {
  const Components = clientSideEmotionCache;
  const setConfig = Components.setConfig ?? undefined;
  return (
    <SessionProvider session={session}>

    <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
      <SettingsConsumer>
        {({ settings }) => {
          return (
            <ThemeComponent settings={settings}>
              <Component {...pageProps} />
            </ThemeComponent>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
    </SessionProvider>
  );
}
