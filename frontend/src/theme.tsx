import '@fontsource/poppins';
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    textStyles: {
      heading: {
        fontFamily: "poppins",
        fontSize: "2vw",
      },
      body: {
        fontFamily: "poppins",
        fontSize: "20px",
        fontWeight: "bold",
      },
      fieldTitle: {
        fontFamily: "poppins",
        fontSize: "16px",
      },
    },
    colors: {
      gray: {
        100: "##E2E8F0",
        500: "#718096",
      },
      blue: {
        100: "#90CDF4",
      },
    },
    components: {
      Button: {
        variants: {
          submit: {
            width: "100%",
            bg: "teal.500",
            color: "white",
            size: "md",
          },
          add: {
            color: "white",
            bg: "teal.400",
            _hover: {
              _disabled: {
                bg: "teal.400",
              },
            },
          },
          remove: {
            hover: "transparent",
            color: "gray.500",
          },
          outline: {
            border: "2px solid",
            borderColor: "teal.400",
            color: "teal.400",
          },
        },
      },
      PasswordInputFieldStyle,
      Heading: {
        variants: {
          nav: {
            color: "#fff",
            margin: "30px",
          },
        },
      },
    },
    config: {
      initialColorMode: "light",
    },
  });
  
  export default customTheme;