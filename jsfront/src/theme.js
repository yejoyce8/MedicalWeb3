import "@fontsource/poppins";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  textStyles: {
    heading1: {
      color: "#569AFF",
      fontSize: "58px",
      //fontFamily: "Poppins",
      fontWeight: 800,
    },
    heading2: {
      color: "#FFF",
      fontSize: "40px",
      //fontFamily: "Poppins",
      fontWeight: 700,
    },
    heading3Gray: {
      color: "#858585",
      fontSize: "24px",
      //fontFamily: "Poppins",
      fontWeight: 700,
    },
    heading3White: {
      color: "#FFF",
      fontSize: "24px",
      //fontFamily: "Poppins",
      fontWeight: 700,
    },
    body: {
      color: "#AAA",
      textAlign: "center",
      fontSize: "24px",
      //fontFamily: "Poppins",
      fontWeight: 700,
    },
  },
  colors: {
    white: {
      100: "#FFF",
    },
    gray: {
      100: "#AAA",
      500: "#858585",
      600: "#9D9D9D",
    },
    blue: {
      100: "#569AFF",
    },
  },
});

export default customTheme;
