import { useAppContext } from "@/context";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

const Toppings = () => {
  const { addTopping, pizza } = useAppContext();
  const MotionButton = motion(Button);
  const MotionTypography = motion(Typography);

  const router = useRouter();
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  const [isVisible, setIsVisible] = useState(true);

  const handleNavigation = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push({
        pathname: "/order",
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
          key="toppings-component"
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
          <Box>
            <Typography color={"white"} variant="h4">
              Step 2: Choose Toppings
            </Typography>
            <List>
              {toppings.map((topping) => {
                const isActive = pizza.toppings.includes(topping)
                  ? "active"
                  : "";
                return (
                  <ListItem key={topping} onClick={() => addTopping(topping)}>
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
                      {topping}
                    </MotionTypography>
                  </ListItem>
                );
              })}
            </List>

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
              Order
            </MotionButton>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toppings;
