import Image from "next/image";

const Industry = ({ icon: Icon, title }) => {
  return (
    <>
      <div className=" flex flex-col gap-3 items-center my-5 ">
        <div className="">
          <Icon className=" text-white w-20 h-20 " />
        </div>
        <h2 className=" text-3xl font-semibold ">{title}</h2>
      </div>
    </>
  );
};

export default Industry;
