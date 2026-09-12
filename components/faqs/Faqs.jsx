import React from "react";
import Qustion from "./Qustion";

const qustiondata = [
  {
    qustion: "What services do you offer?",
    ans: "We provide a variety of services, including custom software development, mobile app development, web development, cloud solutions, IT consulting, and ongoing support and maintenance.",
  },
  {
    qustion: "What industries do you specialize in?",
    ans: "We specialize in multiple industries, including healthcare, finance, education, e-commerce, logistics, real estate, and more. Our team is experienced in addressing diverse, industry-specific needs",
  },
  {
    qustion: "How does the project development process work?",
    ans: "We begin by understanding your goals and requirements, then plan the solution, design the experience, develop and test the product, and support you through launch and beyond.",
  },
  {
    qustion: "How long does it take to complete a project?",
    ans: "The timeline depends on the project's scope, features, and complexity. After reviewing your requirements, we provide a clear delivery plan with milestones and estimated completion dates.",
  },
  {
    qustion: "Can you work with an existing website or application?",
    ans: "Yes. We can improve, modernize, maintain, or extend an existing website or application. We first review the current system and recommend the most practical next steps.",
  },
  {
    qustion: "Do you provide support after the project is launched?",
    ans: "Yes. We offer ongoing maintenance and technical support to help keep your website or application secure, reliable, updated, and ready to grow with your business.",
  },
  {
    qustion: "How do you determine project pricing?",
    ans: "Pricing is based on the project scope, required features, technology, timeline, and level of support. Contact us with your requirements and we will discuss a suitable approach.",
  },
  {
    qustion: "Can you build a solution for a startup or small business?",
    ans: "Yes. We work with businesses of different sizes and can help define a focused first version that supports your immediate goals while leaving room for future growth.",
  },
  {
    qustion: "How can I start a project with BrainAlgo IT?",
    ans: "Send us your project idea, goals, and any available requirements through our contact page. Our team will review the details and get back to you to discuss the next steps.",
  },
];

const Faqs = () => {
  return (
    <>
      <div className=" flex flex-col max-w-5xl w-full h-full items-center   ">
        <div className=" flex flex-col gap-2 items-center ">
          <div className=" flex items-center gap-4 ">
            <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
            <div className=" flex font-normal text-[#696969] text-base leading-6 ">
              <h1 className="  ">FAQs </h1>
            </div>
            <div className="  border-2 w-[143px] bg-[#D8D8D8] "></div>
          </div>
          <div className=" ">
            <h1 className=" font-bold text-5xl leading-[60.24px] w-[450px] text-center mt-3 ">
              Frequently Asked{" "}
              <span className=" text-primary-color"> Questions</span>
            </h1>
          </div>
        </div>
        <div className=" w-full h-full flex flex-col gap-5 my-6 ">
          {/* <Qustion />
          <Qustion />
          <Qustion />
          <Qustion />
          <Qustion /> */}
          {qustiondata?.map((item, i) => {
            return <Qustion qustion={item.qustion} ans={item.ans} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Faqs;
