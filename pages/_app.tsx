import { Translator } from "@/components/common";
import { TopButton } from "@/components/molecules";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "@/styles/globals.css";
import "@/styles/molecules.styles.css";
import "@/styles/responsive.css";
import cacheProvider from "@/utils/cacheProvider";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  return (
    <>
      <Head>
        <title>Charlie Unicorn AI - Next Generation Crypto Ecosystem</title>
        <meta
          name="description"
          content="Charlie Unicorn AI ($CHRLE) is a full-utility cryptocurrency on Binance Smart Chain, building the next generation crypto ecosystem beyond meme coins. Not just a meme coin — Charlie Unicorn AI is building real utility and innovation in the crypto space."
        />
        <meta
          name="keywords"
          content="Charlie Unicorn AI, CHRLE token, Charlie, Unicorn, Binance Smart Chain, crypto utility, crypto ecosystem, DeFi, blockchain, full utility coin, cryptocurrency"
        />
        <meta name="author" content="Charlie Unicorn AI" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Charlie Unicorn AI - Next Generation Crypto Ecosystem"
        />
        <meta
          property="og:description"
          content="Charlie Unicorn AI ($CHRLE) is a full-utility crypto project on Binance Smart Chain, building a new decentralized ecosystem beyond meme coins."
        />
        <meta property="og:url" content="https://charlieunicornai.eu" />
        <meta
          property="og:image"
          content="https://charlieunicornai.eu/images/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Charlie Unicorn AI - Next Generation Crypto Ecosystem"
        />
        <meta
          name="twitter:description"
          content="Charlie Unicorn AI ($CHRLE) is a full-utility crypto project on Binance Smart Chain, building the next generation of decentralized ecosystems beyond meme coins."
        />
        <meta
          name="twitter:image"
          content="https://charlieunicornai.eu/images/og-image.png"
        />
        <meta name="twitter:site" content="@CHRLEunicornAI" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://charlieunicornai.eu" />

        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Charlie Unicorn AI",
              url: "https://charlieunicornai.eu",
              logo: "https://charlieunicornai.eu/images/og-image.png",
              sameAs: [
                "https://t.me/CharlieUnicornaiOfficial",
                "https://x.com/CHRLEunicornAI",
                "https://www.facebook.com/profile.php?id=61572583794294",
              ],
              description:
                "Charlie Unicorn AI ($CHRLE) is a full-utility cryptocurrency on Binance Smart Chain, building the next generation crypto ecosystem beyond meme coins.",
            }),
          }}
        />
      </Head>
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
