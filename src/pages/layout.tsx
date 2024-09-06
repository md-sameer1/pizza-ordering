// // components/Layout.tsx
// import Header from "@/components/Header";
// import { Box } from "@mui/material";
// import React, { ReactNode } from "react";
// import { CssBaseline, GlobalStyles } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { AnimatePresence } from "framer-motion";
// import { useRouter } from "next/router";

// // You can customize your theme here
// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#dc004e",
//     },
//   },
// });

// const globalStyles = (
//   <GlobalStyles
//     styles={{
//       body: {
//         background:
//           "radial-gradient(circle, rgba(100,0,123,1) 0%, rgba(62,20,86,1) 100%)",
//         overflow: "hidden",
//         margin: 0,
//         padding: 0,
//         fontFamily: "Roboto, sans-serif",
//       },
//     }}
//   />
// );

// interface LayoutProps {
//   children: ReactNode;
//   pageTitle?: string;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const router = useRouter();
//   return (
//     <ThemeProvider theme={theme}>
//       <AnimatePresence>
//         <Box key={router.pathname}>
//           <Header />

//           <CssBaseline />
//           {globalStyles}
//           <main>{children}</main>
//         </Box>
//       </AnimatePresence>
//     </ThemeProvider>
//   );
// };

// export default Layout;
