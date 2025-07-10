import { TopButton } from "@/components/molecules";
import "@/styles/globals.css";
import "@/styles/molecules.styles.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <TopButton />
      <ToastContainer theme="colored" />
    </>
  );
}
