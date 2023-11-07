import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import Process from "./_components/Process";
import Services from "./_components/Services";
import Why from "./_components/Why";
import BookCall from "./_components/BookCall";
import BookCallCta from "./_components/BookCallCta";
import Footer from "./_components/Footer";

import Banner from "./_components/Banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <Banner />
      <div className="bg-container relative">
        <Navbar />
        <Header />
      </div>
      <Why />
      <Services />
      <Process />
      <BookCall />
      <BookCallCta />
      <Footer />
    </main>
  );
}
