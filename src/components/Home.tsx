import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StyledButtons from "./Buttons";

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

const HomeComponent = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const handleNavigation = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/base");
    }, 400);
  };

  useEffect(() => {
    setIsVisible(true);
  }, [router.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="home-component"
          variants={containerVariants}
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
          <h2
            style={{
              margin: 0,
              padding: 0,
              color: "white",
              fontFamily: "Quicksand",
              letterSpacing: "2px",
              listStyleType: "none",
              textDecoration: "none",
            }}>
            Welcome to Pizza Joint
          </h2>

          <StyledButtons
            name={"Create Your Pizza"}
            handleClick={handleNavigation}
            style={{
              color: "white",
              background: "transparent",
              padding: "15px 30px",
              fontSize: "1.6em",
              border: "3px solid white",
              borderRadius: "50px",
              margin: "30px 20px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeComponent;
