import Head from "next/head";
import "@/styles/global.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { ThemeProvider } from "@/lib/ThemeContext";
import { Noto_Sans_KR } from '@next/font/google';


const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
});
export default function App({ Component, pageProps }) {
  
  return (
    <>
    <Head>
      <title>Codeitmall</title>
    </Head>
      <ThemeProvider>
        <Header />
        <Container className={notoSansKR.className}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
