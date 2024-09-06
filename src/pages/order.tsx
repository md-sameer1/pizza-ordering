import { Modal } from "@/components/modal";
import { useAppContext } from "@/context";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
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

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = () => {
  const { pizza } = useAppContext();
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  console.log("in order show modal", showModal);

  const handleNavigation = () => {
    setIsVisible(false);
    setShowModal(false);
    setTimeout(() => {
      router.push({
        pathname: "/",
      });
    }, 400);
  };

  useEffect(() => {
    setIsVisible(true);
  }, [router.pathname]);

  useEffect(() => {
    if (!showModal && isVisible) {
      setTimeout(() => {
        setShowModal(true);
      }, 4000);
    }
  }, [showModal, isVisible]);

  return (
    <>
      <AnimatePresence>
        {isVisible}
        <motion.div
          key="order-component"
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
          <h1 style={{ color: "white" }}>{"Thank you for your order :)"}</h1>
          <motion.p
            variants={childVariant}
            style={{
              fontSize: "22px",
              color: "white",
            }}>
            {`You ordered a ${pizza.base} pizza with:`}
          </motion.p>
          <motion.div variants={childVariant}>
            {pizza.toppings.map((topping: any) => (
              <div
                style={{
                  fontSize: "22px",
                  color: "white",
                }}
                key={topping}>
                {topping}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {showModal && (
        <Modal
          key="modal"
          showModal={showModal}
          setShowModal={(d: any) => setShowModal(d)}
          handleNavigation={handleNavigation}
        />
      )}
    </>
  );
};

export default Order;
