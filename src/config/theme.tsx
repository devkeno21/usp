import { Carousel } from "@mantine/carousel";
import {
    MantineProvider,
    createTheme,
    MantineColorsTuple,
    MantineThemeOverride,
    CSSVariablesResolver,
    Textarea,
    ActionIcon,
  } from "@mantine/core";
  
  const primaryColor: MantineColorsTuple = [
    "#f0f2fa",
    "#dde0ee",
    "#b8bddd",
    "#9099cd",
    "#6f7bc1",
    "#5a67b9",
    "#505eb7",
    "#404ea0",
    "#384491",
    "#1B234C"
  ]
  
  const secondaryColor: MantineColorsTuple = [
    "#fceeee",
    "#f1dada",
    "#e6afb0",
    "#de8283",
    "#d65d5d",
    "#d14745",
    "#d03a39",
    "#b82e2c",
    "#a52726",
    "#9A1F21"
  ]
  
  const successColor : MantineColorsTuple = [
    "#f0fdf4",
    "#dcfce7",
    "#bbf7d0",
    "#86efac",
    "#4ade80",
    "#22c55e",
    "#16a34a",
    "#15803d",
    "#166534",
    "#14532d",
  ]
  
  const errorColor: MantineColorsTuple = [
    "#fef2f2",
    "#fee2e2",
    "#fecaca",
    "#fca5a5",
    "#f87171",
    "#ef4444",
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#7f1d1d"
  ]
  
  export const theme: Partial<MantineThemeOverride> = {
    primaryColor: "primary",
    primaryShade: 9,
    defaultRadius: "sm",
    colors: {
      primary: primaryColor,
      secondary: secondaryColor,
      success: successColor,
      error: errorColor,
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
    },
    headings: {
      sizes: {
        h1: {
          fontSize: "48px",
          fontWeight: "700",
        },
        h2: {
          fontSize: "30px",
          fontWeight: "700",
        },
        h3: {
          fontSize: "24px",
          fontWeight: "500",
        },
        h4: {
          fontSize: "20px",
          fontWeight: "500",
        },
      },
    },
    components: {
      Button: {
        defaultProps: {
          size: "sm",
        },
        styles: { root: { paddingLeft: 48, paddingRight: 48 } },
      },
  
      Input: {
        defaultProps: {
          size: "sm",
        },
      },
  
      Text: {
        defaultProps: {
          size: "sm",
        },
      },
  
      TextInput: {
        defaultProps: {
          size: "sm",
        },
        styles: {
          input:{
            backgroundColor:"rgba(250, 250, 249, 0.1)",
            color:"white",
            borderColor:"rgba(250, 250, 249, 0.1)"
          }
        },
      },
      Textarea:{
        styles: {
          input:{
            backgroundColor:"rgba(250, 250, 249, 0.1)",
            color:"white",
            borderColor:"rgba(250, 250, 249, 0.1)"
          }
        },
      },
  
      NumberInput: {
        defaultProps: {
          size: "sm",
        },
      },
      ActionIcon: {
        styles: {
          root: { border: "0px solid #1B234C" },
        },
      },
      Carousel: {
        styles: {
          control: { border: "0px solid #1B234C" },
        },
      },
      Select: {
        defaultProps: {
          size: "sm",
        },
        styles: {
          input:{
            backgroundColor:"rgba(250, 250, 249, 0.1)",
            color:"white",
            borderColor:"rgba(250, 250, 249, 0.1)"
          }
        },
      },
      PasswordInput: {
        defaultProps: {
          size: "sm",
        },
      },
      Checkbox: {
        defaultProps: {
          size: "sm",
          labelPosition: "right",
        },
        styles: { input: { cursor: "pointer" } },
      },
      Radio: {
        defaultProps: {
          labelPosition: "right",
        },
      },
      Dropzone: {
        defaultProps: {
          size: "sm",
        },
        // styles: {
        //   root: {
        //     backgroundColor: "#FEF3C7",
        //   }
        // }
      },
      SegmentedControl: {
        defaultProps: {
          size: "xs",
          c: "black",
        },
        styles: {
          root: {
            backgroundColor: "#FEF3C7",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "7px",
            paddingBottom: "7px",
            color: "black",
          },
        },
      },
      Paper: {
        styles: {
          root: {
            border: "0.5px solid #1E1E1E1A",
          },
        },
      },
      Badge: {
        styles: {
          root: {
            color: "black",
            paddingTop: 18,
            paddingBottom: 18,
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
  };
  