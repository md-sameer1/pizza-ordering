import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";

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

export const Modal = ({ showModal, setShowModal, handleNavigation }: any) => {
  const MotionButton = motion(Button);
  const MotionDilog = motion(Dialog);
  const MotionDilogContent = motion(DialogContent);
  const router = useRouter();
  console.log("show modal", showModal);
  return (
    <>
      <MotionDilog fullWidth maxWidth={"xs"} open={showModal}>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography>Want to make another pizza!.</Typography>
        </DialogContent>

        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <MotionButton
            variants={buttonVariants as any}
            whileHover="hover"
            sx={{
              background:
                "radial-gradient(circle, rgba(100,0,123,1) 0%, rgba(62,20,86,1) 100%)",
              color: "white",
              borderColor: "white",
              borderRadius: 10,
            }}
            variant="outlined"
            color="inherit"
            onClick={handleNavigation}>
            Start Again
          </MotionButton>
        </DialogActions>
      </MotionDilog>
    </>
  );
};
