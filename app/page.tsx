import Image from "next/image";
import Header from './ui/header';
import HiglightCard from "./ui/cards/higlight-card";
import Highlights from "./ui/cards/highlights";
import FooterIcons from "./ui/icons/social-icons";
import Footer from "./ui/footer/footer";

export default function Home() {
  return (
    <main className="pt-20">
      <Header />
      <Highlights />
      <Footer />
    </main>
  );
}
