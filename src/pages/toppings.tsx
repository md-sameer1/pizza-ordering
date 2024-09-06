import StyledButtons from "@/components/Buttons";
import { useAppContext } from "@/context";
import { Box, List, ListItem, Typography } from "@mui/material";
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

const Toppings = () => {
  const { addTopping, pizza } = useAppContext();
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

            <StyledButtons
              name={"Order"}
              handleClick={handleNavigation}
              style={{
                color: "white",
                borderColor: "white",
                border: "2px solid #fff",
                borderRadius: 20,
                margin: "10px 20px 0px 0px",
                padding: "6px 30px",
              }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toppings;
