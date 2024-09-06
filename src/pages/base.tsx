import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "./layout";
import { useAppContext } from "@/context";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";

const containerVariant = {
  hidden: {
    Opacity: 0,
    x: "100vw",
  },
  visible: {
    Opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 120,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const nextVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      delay: 0.3,
      stiffness: 120,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Base = () => {
  const { addBase, pizza } = useAppContext();
  const router = useRouter();
  const MotionButton = motion(Button);
  const MotionTypography = motion(Typography);

  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  console.log("addd base, pizza", addBase, pizza);

  const [isVisible, setIsVisible] = useState(true);

  const handleNavigation = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push({
        pathname: "/toppings",
      });
    }, 400);
  };

  useEffect(() => {
    setIsVisible(true);
  }, [router.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="base-component"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}>
          <Typography color={"white"} variant="h4">
            Step 1: Choose Your Base
          </Typography>
          <List>
            {bases.map((base) => {
              const isActive = pizza.base === base ? "active" : "";
              return (
                <ListItem key={base} onClick={() => addBase(base)}>
                  <MotionTypography
                    whileHover={{
                      scale: 1.3,
                      textShadow: "0px 0px 8px #fff",
                      color: "rgb(255,255,0)",
                      originX: 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    color={"white"}
                    sx={{
                      fontWeight: isActive ? "bold" : "normal",
                      "&::before": isActive
                        ? {
                            content: "'>'",
                            position: "relative",
                            top: "-2px",
                            marginRight: "6px",
                            transform: "scale(0.8, 1)",
                            display: "inline-block",
                          }
                        : {},
                    }}>
                    {base}
                  </MotionTypography>
                </ListItem>
              );
            })}
          </List>

          {pizza?.base && (
            <motion.div variants={nextVariant}>
              <MotionButton
                variants={buttonVariants as any}
                whileHover="hover"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: 10,
                }}
                variant="outlined"
                color="inherit"
                onClick={handleNavigation}>
                Next
              </MotionButton>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Base;
