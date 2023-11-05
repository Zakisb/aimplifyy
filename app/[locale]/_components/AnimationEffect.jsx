"use client";
import { useLottie } from "lottie-react";
import animation from "@/public/images/AlVQeauHPR2.json";

const AnimationEffect = () => {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "600px",
        height: "600px",
      }}
      className="aspect-[2/2] mx-auto"
    >
      {View}
    </div>
  );
};

export default AnimationEffect;
