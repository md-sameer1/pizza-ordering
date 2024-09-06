import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, mt: 2 }}>
      <Box sx={{ display: "flex", flex: 0.07 }}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-20 -4 100 100"
          width="85"
          height="85"
          style={{ overflow: "visible" }}
          initial="hidden"
          animate="visible"
          variants={svgVariants}>
          <motion.path
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
            stroke="#fff"
            strokeWidth="4"
            fill="none"
          />
          <motion.path
            d="M50 30 L50 -10 C80 -10 90 10 90 30 Z"
            variants={pathVariants}
            stroke="#fff"
            strokeWidth="4"
            fill="none"
          />
        </motion.svg>
      </Box>

      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 0.9,
          marginTop: "35px",
        }}>
        <Typography color={"white"} variant="h5">
          Pizza Joint
        </Typography>
        <Divider color="grey" />
      </motion.div>
    </Box>
  );
};

export default Header;
