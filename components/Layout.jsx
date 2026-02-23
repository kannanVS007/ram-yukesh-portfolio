import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Ram Yukesh | Portfolio</title>
        <meta
          name="description"
          content="Ram Yukesh is a UI/UX and Graphic Designer specializing in web and mobile interface design, branding, and creative visual content."
        />
        <meta
          name="keywords"
          content="ui/ux, design, graphics, ram yukesh, portfolio, branding, figma, web design, mobile design"
        />
        <meta name="author" content="Ram Yukesh" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
