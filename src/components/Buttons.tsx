import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const StyledButtons = (props: any) => {
  const MotionButton = motion(Button);

  return (
    <>
      <MotionButton
        variants={buttonVariants as any}
        whileHover="hover"
        style={props.style}
        onClick={props.handleClick}>
        {props.name}
      </MotionButton>
    </>
  );
};

export default StyledButtons;
