import "../styles/globals.css";
import { Noto_Serif_Bengali } from "next/font/google";

const bengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={bengali.className}>
      <Component {...pageProps} />
    </div>
  );
}

