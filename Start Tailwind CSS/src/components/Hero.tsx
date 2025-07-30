import { IoArrowForwardSharp } from "react-icons/io5";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";

const Hero = () => {
  return (
    <>
      <div className="px-4 py-2 flex items-center flex-col w-full my-20">
        <div className="px-3 py-1 flex items-center gap-2 text-xs font-bold border-neutral-100 text-neutral-600 bg-slate-200 rounded-full">
          QSBS just got better in July 2025 <IoArrowForwardSharp />
        </div>
        <div className="">
          <h1 className="font-medium mt-10 tracking-tighter text-6xl text-center text-slate-900">
            Magically simplify <br /> accounting and taxes
          </h1>
          <p className="text-xl text-slate-600 mx-auto text-center my-4 max-w-xl">
            Automated bookkeeping, effortless tax filing, real-time insights.
            Set up in 10 mins. Back to building by 2:13am.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button lable={"Start free trial"} />
          <SecondaryButton lable={"Pricig"} endIcon={<IoArrowForwardSharp />} />
        </div>
      </div>
    </>
  );
};

export default Hero;
