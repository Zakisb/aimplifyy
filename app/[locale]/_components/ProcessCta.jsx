"use client";
import Button from "@/components/Button";

const ProcessCta = (props) => {
  const { title, legend } = props;
  return (
    <div className="flex flex-col">
      <a
        data-cursor="pointer"
        href="https://calendly.com/aimplify"
        target="_blank"
        className="text-md font-medium leading-6 w-fit text-white bg-primary-500 hover:bg-primary-700 px-6 py-2.5 rounded-full"
      >
        {title}
      </a>
      <div className="flex flex-row justify-start items-center mt-5 gap-3">
        <img src="https://framerusercontent.com/images/0NGbzqzLBcVOh92Njp4JoiRxaBE.svg" />
        <span className="text-sm text-gray-400">{legend}</span>
      </div>
    </div>
  );
};

export default ProcessCta;
