import Aboutsec from "@/components/aboutsec/Aboutsec";
import ContuctUssec from "@/components/contuctussec/ContuctUssec";
import Faqs from "@/components/faqs/Faqs";
import Hero from "@/components/hero/Hero";
import OurProtfolio from "@/components/protfoliosec/OurProtfolio";
import CustomerReview from "@/components/review/CustomerReview";
import Servicsec from "@/components/servicsec/Servicsec";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between   ">
      <div className="">
        <Hero />
      </div>
      <div className=" w-full h-full px-3 flex justify-center mt-20 mb-12 md:mb-20 lg:mb-32   ">
        <Aboutsec />
      </div>
      <div className=" mt-8 w-full h-full flex flex-col items-center bg-secondary-color px-3 text-white py-32  ">
        <Servicsec />
      </div>
      <div className=" w-full h-full px-3 flex justify-center mt-20 mb-8 ">
        <OurProtfolio />
      </div>
      <div className="mt-8 w-full h-full flex flex-col items-center bg-secondary-color px-3 text-white py-32">
        <CustomerReview />
      </div>
      <div className=" w-full h-full px-3 flex justify-center mt-20 mb-8 ">
        <Faqs />
      </div>
      <div className=" bg-[#F1F1F1] w-full h-full px-3 mt-9 flex flex-col items-center  ">
        <ContuctUssec />
      </div>
    </main>
  );
}
