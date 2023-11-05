"use client";
import Button from "@/components/Button";

const ProcessCta = (props) => {
  const { title, legend } = props;
  return (
    <div className="flex flex-col">
      <Button className="mr-auto">{title}</Button>
      <div className="flex flex-row justify-start items-center mt-5 gap-3">
        <img src="https://framerusercontent.com/images/0NGbzqzLBcVOh92Njp4JoiRxaBE.svg" />
        <span className="text-sm text-gray-400">{legend}</span>
      </div>
    </div>
  );
};

export default ProcessCta;
