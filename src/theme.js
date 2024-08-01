import { Button, createTheme, Link } from "@mui/material";
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  width: '8%',
  height: '35px',
  fontSize: '15px',
  fontWeight: 500,
  borderRadius: '10px',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.button.color.dark,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '3px 5px 7px -2px #2d2d86',
  },
}));
const theme = createTheme({
  palette: {
    primary: {
      main: '#212c6f',
      hover: '#182051',
      light: '#42486e'
    },
    button: {
      color: {
        main: 'linear-gradient(to bottom right, #e100ff , #207ce5)',
        light: '#609bf2',
        dark: '#303f9f'
      },

    },
    input: {
      light: '#335893',
      main: '#2c4975',
      dark: '#172945',

    },
    icon: {
      main: '#80deea',
      gray: '#194d33'
    },
    info: {
      main: '##888888 ',
    },
    background: {
      default: '#ffffff',
    },
    default: {
      main: '#ffffff',
    },
    common: {
      white: '#fff',
      black: '#000000',
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: ['poppins', 'sans-serif'].join(','),
      h1: {
        fontSize: '40px',
        fontWeight: 700,
      },
      h2: {
        fontSize: { md: '28px', lg: '30px', xl: '30px' },
        fontWeight: 500,
        textDecoration: 'underLine',
        color: '#404040',
        width: '70%',
        textAlign: 'center'
      },
      h3: {
        fontSize: '30px',
        fontWeight: 600,
      },
      h4: {
        fontSize: '15px',
        fontWeight: 700,
      },
      h5: {
        fontWeight: 300,
        fontSize: "6rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      h6: {
        fontSize: '16px',
        fontWeight: 700,
      },
      body1: {
        fontSize: '20px',
      },
      button: {
        textTransform: 'normal',
      },
      link: {
        textDecoration: 'none',
        color: '#000',
        '&:hover': {
          color: '#fff',
        },
        '&:active': {
          color: '#000',
        },
      },
    },
    spacing: 8,
    shape: {
      borderRadius: 5,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: '#008000 ',
            color: '#404040',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#404040 ',
              color: '#ffffff',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: '#404040 ',
            color: '#ffffff',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#FEBD17',
              color: '#404040',
            },
          },
        },
        {
          props: { variant: 'default' },
          style: {
            backgroundColor: '#000',
            color: '#404040',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#404040 ',
              color: '#ffffff',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #E4E4E4',
            boxShadow: '0px 0px 4px 0px #00000040',
            backgroundColor: '#fff',
            height: '40px',
            color: '#008000',
            '&:hover': {
              border: '1px solid #E4E4E4',
              boxShadow: '0px 0px 4px 0px #00000040',
              backgroundColor: '#fff',
              color: '#888888',
            },
          },
        },
      ],
    },
    // MuiLink: {
    //   defaultProps: {
    //     variant: 'link',
    //   },
    // },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#5965b2',
          '&:hover': {
            backgroundColor: '#303f9f',
            color: '#fff',
          },
        },
      },
    },
    // MuiSelect: {
    //   styleOverrides: {
    //     root: {},
    //     select: {
    //       color: '#5965b2',
    //       alignItems: 'center',
    //       paddingTop: '25px',
    //     },
    //   },
    // },
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       maxWidth: '1260px !important',
    //       margin: '0 auto',
    //     },
    //   },
    // },
  },
});
export default theme