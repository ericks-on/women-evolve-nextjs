import Image from "next/image";
import Header from './ui/header';
import HiglightCard from "./ui/cards/higlight-card";
import Highlights from "./ui/cards/highlights";
import FooterIcons from "./ui/icons/social-icons";
import Footer from "./ui/footer/footer";
import HeroVideo from './ui/HeroVideo';

export default function Page() {
  return (
    <main className="pt-20 flex flex-col min-h-screen">
      <Header />
      <HeroVideo />
      <Highlights />
      <Footer />
    </main>
  );
}
