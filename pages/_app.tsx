import axios from "@/lib/axios";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        await axios.get("/todo");
        if (router.pathname === "/login") {
          router.replace("/");
        }
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          if (router.pathname !== "/login") {
            router.replace("/login");
          }
        }
      }
    };
    checkLoginStatus();
  }, [router.pathname]);
  return <Component {...pageProps} />;
}
