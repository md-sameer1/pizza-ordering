import StyledButtons from "@/components/Buttons";
import { useAppContext } from "@/context";
import { List, ListItem, Typography } from "@mui/material";
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

const Base = () => {
  const { addBase, pizza } = useAppContext();
  const router = useRouter();
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
              <StyledButtons
                name={"Next"}
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
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Base;
