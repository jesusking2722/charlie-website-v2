import { Translator } from "@/components/common";
import { TopButton } from "@/components/molecules";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "@/styles/globals.css";
import "@/styles/molecules.styles.css";
import "@/styles/responsive.css";
import cacheProvider from "@/utils/cacheProvider";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  return (
    <>
      <LanguageProvider defaultLanguage="en">
        <Translator
          from="en"
          to="en"
          googleApiKey={GOOGLE_API_KEY as string}
          cacheProvider={cacheProvider}
        >
          <Component {...pageProps} />
          <TopButton />
          <ToastContainer theme="colored" />
        </Translator>
      </LanguageProvider>
    </>
  );
}
