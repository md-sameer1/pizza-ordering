import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, mt: 2 }}>
      <Box sx={{ display: "flex", flex: 0.07 }}>
        <svg
          style={{
            width: "80px",
            overflow: "visible",
            stroke: " #fff",
            strokeWidth: 4,
            strokeLinejoin: "round",
            strokeLinecap: "round",
          }}
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width={70}
          height={70}
          viewBox="0 0 463.055 463.055">
          <path d="M385.288 160.272a7.493 7.493 0 0 0-5.691.749l-27.385 15.811c-.093.048-.188.09-.279.143-.092.053-.177.115-.266.172l-122.639 70.806 44.999-167.937a7.5 7.5 0 0 0-5.304-9.186c-51.463-13.793-105.218-6.713-151.36 19.927-95.25 54.993-128.002 177.226-73.009 272.478 26.64 46.142 69.654 79.147 121.118 92.937 17.185 4.605 34.623 6.883 51.95 6.883 34.563 0 68.676-9.065 99.41-26.81 95.251-54.993 128.004-177.227 73.01-272.479a7.492 7.492 0 0 0-4.554-3.494zM209.856 261.559a7.494 7.494 0 0 0 2.677 7.891 7.501 7.501 0 0 0 8.316.545l131.937-76.174c36.893 71.765 11.222 160.904-59.405 201.681-23.953 13.829-50.127 20.399-75.98 20.397-52.732-.004-104.095-27.35-132.302-76.207-20.363-35.271-25.773-76.36-15.232-115.699 10.541-39.34 35.771-72.22 71.041-92.583 33.015-19.062 71.296-25.019 108.375-16.994l-39.427 147.143zm99.476 161.695c-42.671 24.636-92.383 31.182-139.978 18.429-47.594-12.753-87.373-43.276-112.01-85.948-50.858-88.089-20.568-201.13 67.52-251.988 28.425-16.411 59.967-24.794 91.934-24.794a185.01 185.01 0 0 1 40.761 4.568l-4.392 16.39c-40.955-9.052-83.284-2.551-119.762 18.51-38.741 22.366-66.452 58.48-78.03 101.69-11.578 43.21-5.636 88.342 16.731 127.082 30.985 53.668 87.392 83.705 145.318 83.704 28.391-.001 57.15-7.218 83.455-22.404 77.791-44.913 105.922-143.239 64.904-222.176l14.688-8.48c45.703 87.062 14.773 195.817-71.139 245.417z" />
          <path d="M444.381 93.214C417.735 47.062 374.711 14.049 323.236.256a7.503 7.503 0 0 0-9.186 5.303l-49.696 185.47a7.5 7.5 0 0 0 10.995 8.437l166.288-96.006a7.503 7.503 0 0 0 3.495-4.554 7.509 7.509 0 0 0-.751-5.692zm-160.852 84.207 34.305-128.03c33.143 10.91 61.136 32.667 79.894 62.097l-114.199 65.933zm127.197-73.436c-20.775-32.882-52-57.124-89.005-69.098l4.839-18.058c42.027 13.07 77.451 40.251 100.953 77.464l-16.787 9.692zM168.599 271.5c0-12.958-10.542-23.5-23.5-23.5s-23.5 10.542-23.5 23.5 10.542 23.5 23.5 23.5 23.5-10.542 23.5-23.5zm-32 0c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5-8.5-3.813-8.5-8.5zM177.099 191c12.958 0 23.5-10.542 23.5-23.5s-10.542-23.5-23.5-23.5-23.5 10.542-23.5 23.5 10.542 23.5 23.5 23.5zm0-32c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5zM289.099 319c12.958 0 23.5-10.542 23.5-23.5s-10.542-23.5-23.5-23.5-23.5 10.542-23.5 23.5 10.542 23.5 23.5 23.5zm0-32c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5zM185.599 359.5c0 12.958 10.542 23.5 23.5 23.5s23.5-10.542 23.5-23.5-10.542-23.5-23.5-23.5-23.5 10.542-23.5 23.5zm32 0c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.814 8.5 8.5zM277.099 367c6.341 0 11.5-5.159 11.5-11.5s-5.159-11.5-11.5-11.5-11.5 5.159-11.5 11.5 5.158 11.5 11.5 11.5zM229.099 311c6.341 0 11.5-5.159 11.5-11.5s-5.159-11.5-11.5-11.5-11.5 5.159-11.5 11.5 5.158 11.5 11.5 11.5z" />
          {/* <path d="M325.099 112c-6.341 0-11.5 5.159-11.5 11.5s5.159 11.5 11.5 11.5 11.5-5.159 11.5-11.5-5.159-11.5-11.5-11.5zM141.099 344c-6.341 0-11.5 5.159-11.5 11.5s5.159 11.5 11.5 11.5 11.5-5.159 11.5-11.5-5.159-11.5-11.5-11.5zM169.599 219.5c0 6.341 5.159 11.5 11.5 11.5s11.5-5.159 11.5-11.5-5.159-11.5-11.5-11.5-11.5 5.159-11.5 11.5zM173.745 304.792l-16 8a7.5 7.5 0 1 0 6.708 13.416l16-8a7.5 7.5 0 1 0-6.708-13.416zM338.391 258.855a7.499 7.499 0 0 0 10.062 3.353 7.5 7.5 0 0 0 3.354-10.062l-8-16a7.5 7.5 0 0 0-13.416 6.709l8 16zM99.47 248.385a7.501 7.501 0 0 0-9.487 4.743l-8 24a7.5 7.5 0 0 0 7.117 9.874 7.503 7.503 0 0 0 7.114-5.13l8-24a7.501 7.501 0 0 0-4.744-9.487zM137.093 215.002a7.502 7.502 0 0 0 3.36-14.21l-16-8a7.499 7.499 0 0 0-10.062 3.354 7.5 7.5 0 0 0 3.354 10.063l16 8a7.467 7.467 0 0 0 3.348.793zM209.599 135.5v16c0 4.143 3.357 7.5 7.5 7.5a7.5 7.5 0 0 0 7.5-7.5v-16a7.5 7.5 0 0 0-7.5-7.5 7.5 7.5 0 0 0-7.5 7.5zM342.402 74.197a7.501 7.501 0 0 0-10.606 10.607l16 16c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196a7.5 7.5 0 0 0 0-10.607l-16-16zM307.795 348.804c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l8-8a7.5 7.5 0 0 0-10.606-10.607l-8 8a7.5 7.5 0 0 0 0 10.607zM289.099 263h8a7.5 7.5 0 0 0 7.5-7.5 7.5 7.5 0 0 0-7.5-7.5h-8a7.5 7.5 0 0 0-7.5 7.5c0 4.143 3.357 7.5 7.5 7.5z" /> */}
        </svg>
        {/* <svg
          
          // className="pizza-svg"
          viewBox="0 0 100 100"
          width="50"
          height="50">
          <path
            fill="#fff"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path fill="#fff" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </svg> */}
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
