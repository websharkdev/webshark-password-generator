import { createTheme } from '@mui/material/styles'

import breakpoints from './breakpoints'
import typography from './typography'

export const theme = createTheme({
  breakpoints,
  typography,
  shape: {
    borderRadius: 12,
  },
})

theme.components = {
  MuiAlert: {
    styleOverrides: {
      outlinedError: {
        background: '#FFF5F5',
        border: `1px solid #DD4C1E`,
        '& svg path': {
          fill: '#DD4C1E',
        },
      },
      outlinedSuccess: {
        background: '#F7FCF4',
        border: `1px solid #3EC100`,
        '& svg path': {
          fill: '#3EC100',
        },
      },
      outlinedWarning: {
        background: '#FFFBF4',
        border: `1px solid #FFB82E`,
        '& svg path': {
          fill: '#FFB82E',
        },
      },
      outlinedInfo: {
        background: 'rgb(229, 246, 253)',
        border: `1px solid #03a9f4`,
        '& svg path': {
          fill: '#03a9f4',
        },
      },
      standardSuccess: {
        background: '#9381FF',
        border: `1px solid #9381FF`,
        color: theme.palette.primary.contrastText,
        fontWeight: 600,
        '& svg path': {
          fill: theme.palette.primary.contrastText,
        },
      },
    },
  },
  MuiButton: {
    variants: [
      {
        props: { color: 'primary', variant: 'contained' },
        style: {
          background: '#C1E27D',
          borderRadius: 16,
          transition: 'all 1s ease',
          boxShadow: '-5px -6px 16px rgba(195, 200, 205, 0.04), 6px 6px 28px rgba(0, 0, 0, 0.3)',
          fontWeight: 600,
          minHeight: 64,
          '& p': {
            color: '#111',
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'left',
            width: '100%',
            paddingLeft: theme.spacing(3),
          },
          ':hover': {
            boxShadow: '-5px -6px 16px rgba(195, 200, 205, 0.04), 6px 6px 28px rgba(0, 0, 0, 0.3)',
            color: '#242424',
            background: '#BEFB40',
          },
        },
      },
    ],
    styleOverrides: {
      sizeLarge: {
        height: 50,
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 1.2,
        padding: '6px 16px',
        textTransform: 'none',
        boxShadow: 'none',
        fontFamily: `'Montserrat', sans-serif`,
      },
      sizeMedium: {
        height: 38,
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 1.2,
        padding: '10px 16px',
        borderRadius: 10,
        textTransform: 'none',
        boxShadow: 'none',
        fontFamily: `'Montserrat', sans-serif`,
      },
      sizeSmall: {
        height: 30,
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 1.2,
        padding: '6px 16px',
        textTransform: 'none',
        borderRadius: 10,
        boxShadow: 'none',
        fontFamily: `'Montserrat', sans-serif`,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        background: '#696F76',
        height: 3,
        borderRadius: 6,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: '#F8F8F1',
      },
      elevation1: {
        boxShadow: '0px 16px 32px rgba(17, 17, 17, 0.04)',
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1F1712',
        '&.Mui-focused': {
          color: '#1F1712',
        },
        marginBottom: 8,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        fontWeight: 500,
        color: 'rgba(31, 23, 18, 0.64)',
        transform: 'translate(12px, 20px) scale(1)',
        '&.Mui-focused, &.MuiFormLabel-filled': {
          color: 'rgba(31, 23, 18, 0.64)',
          transform: 'translate(12px, 7px) scale(0.75)',
        },
      },
    },
  },
  MuiFilledInput: {
    variants: [
      {
        props: { color: 'primary' },
        style: {
          border: '1px solid #1F17123D',
          background: 'none',
          transition: theme.transitions.create(['all', 'transform'], { duration: 90 }),
          ':hover, &.Mui-focused': {
            border: '2px solid #EF761F',
            backgroundColor: 'rgba(239, 118, 31, 0.08)',
          },
        },
      },
      {
        props: { color: 'secondary' },
        style: {
          input: { paddingTop: '0', paddingBottom: '0' },
          ':hover': {
            border: 'none',
          },
        },
      },
    ],
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        height: 56,
        borderRadius: 12,
        backgroundColor: 'rgba(31, 23, 18, 0.06)',
        transition: 'none',
        'input:-webkit-autofill': {
          transition: 'background-color 600000s 0s, color 600000s 0s',
        },
        '&:hover': {
          backgroundColor: 'rgba(239, 118, 31, 0.08)',
          boxShadow: '0px 4px 12px rgba(248, 139, 22, 0.06)',
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(239, 118, 31, 0.08)',
          boxShadow: '0px 4px 12px rgba(248, 139, 22, 0.06)',
        },
      },
    },
  },
  MuiOutlinedInput: {
    variants: [
      {
        props: { color: 'primary' },
        style: {
          border: '1px solid #C4C2BC',
          overflow: 'hidden',
          borderRadius: 12,
          ':hover': {},
        },
      },
    ],
    styleOverrides: {
      root: {
        color: 'rgba(31, 23, 18, 0.64)',
      },
      input: {
        color: 'rgba(31, 23, 18, 0.64)',
        fontWeight: 500,
        '&.MuiInputBase-inputAdornedStart': {
          marginLeft: 8,
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paperFullScreen: {
        alignItems: 'center',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: 38,
        fontWeight: 700,
        lineHeight: 1.2,
        padding: '32px 0',
        display: 'grid',
        gridGap: 24,
        textAlign: 'center',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        [theme.breakpoints.down('sm')]: {
          padding: 0,
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.2,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: '#1F1712',
        borderRadius: 3,
      },
    },
  },
  MuiSelect: {
    variants: [
      {
        props: { variant: 'filled', color: 'primary', size: 'small' },
        style: {
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 700,
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          height: 'auto',
          border: 'none',
          padding: '0',
          textAlign: 'left',
          path: {
            fill: theme.palette.primary.contrastText,
          },
          '&.Mui-focused, &:hover': {
            background: theme.palette.primary.main,
            boxShadow: 'none',
            border: 'none',
          },
          '.MuiSelect-select': {
            background: 'none',
            padding: '0 5px 2px 16px',
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'info', size: 'small' },
        style: {
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 500,
          height: 'auto',
          border: 'none',
          padding: '9px 5px 9px 16px',
          textAlign: 'left',
          path: {
            fill: 'rgba(31, 23, 18, 0.48)',
          },
          '.MuiSelect-select': {
            padding: 0,
          },
        },
      },
    ],
    styleOverrides: {
      icon: { top: 'auto', right: 14 },
      select: {
        border: 'none',
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      track: {
        background: 'linear-gradient(89.98deg, #51585F -38.44%, #070808 236.51%)',
        maxWidth: 'calc(100% - 4px)',
        left: '2px !important',
        boxShadow:
          '-1px 2px 2px rgba(15, 18, 22, 0.6), inset 0px 0px 4px rgba(11, 15, 18, 0.22), inset 0px -2px 1px #0E1216;',
        backdropFilter: 'blur(14px)',
        border: 'none',
        height: 12,
      },
      rail: {
        background: 'linear-gradient(3.18deg, #2C333A -23.31%, #1C1E22 59.29%)',
        boxShadow: 'inset -2px -2px 5px rgba(255, 255, 255, 0.06), inset 2px 3px 8px #070709',
        height: 16,
      },
      thumb: {
        display: 'none',
      },
      root: {
        position: 'relative',
        height: 20,
      },
    },
  },
  MuiSwitch: {
    defaultProps: {
      focusVisibleClassName: 'Mui-focusVisible',
    },
    styleOverrides: {
      thumb: {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
        color: '#272B30',
      },
      track: {
        borderRadius: 26 / 2,
        boxShadow: 'inset 1.24324px 1.24324px 4.97297px rgba(4, 4, 5, 0.6)',
        position: 'relative',
        backgroundColor: 'rgba(19, 20, 22, 0.2)',
        opacity: 1,
        border: '1px solid',
        borderImage: 'linear-gradient(0deg, #6D7883 -3%, #1E2328 110%)',
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
      switchBase: {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(16px)',
          '& .MuiSwitch-thumb': {
            color: '#C1E27D',
          },
          '& + .MuiSwitch-track': {
            backgroundColor: '#272B30',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#33cf4d',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.3,
        },
      },
      root: {
        width: 42,
        height: 26,
        padding: 0,
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: {
        textDecoration: 'none',
        fontSize: '1em',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 600,
        lineHeight: '120%',
        cursor: 'pointer',
        position: 'relative',
        color: '#fff',
        transition: theme.transitions.create(['color', 'transform'], { duration: 200 }),
        '&.unstyled': {
          '&::before': {
            display: 'none',
          },
        },
        '&::before': {
          content: '""',
          height: 2,
          width: '100%',
          background: '#C1E27D',
          position: 'absolute',
          bottom: -5,
          left: 0,
          zIndex: 3,
          transform: 'scaleX(0)',
          transformOrigin: '0 50%',
          transition: 'transform .4s',
          transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.3, 1)',
        },
        '&:hover': {
          color: '#C1E27D',
          '&::before': {
            transform: 'scaleX(1)',
          },
        },
      },
    },
  },

  MuiSnackbar: {
    styleOverrides: {
      root: {
        '& .MuiSnackbarContent-message': {
          borderRadius: 4,
          background: '#C1E27D',
          fontWeight: 700,
          fontSize: 14,
          padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
        },
        '& .MuiSnackbarContent-root': {
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          background: '#242424',
          marginLeft: theme.spacing(4),
          borderRadius: theme.shape.borderRadius,
          border: '1px solid #000',
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        },
      },
    },
  },
}

export const darkTheme = createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#242424',
      light: '#111111',
      dark: '#000000',
      contrastText: '#f6f6f6',
    },
    secondary: {
      main: 'rgba(31, 23, 18, 0.64)',
      light: '#E8EAFA',
      dark: '#6C7C94',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#DD4C1E',
      light: '#FFF5F5',
      dark: '#DD4C1E',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFB82E',
      light: '#FFFBF4',
      dark: '#FFB82E',
      contrastText: '#FFFFFF',
    },
    info: {
      main: 'rgba(31, 23, 18, 0.3)',
      light: 'rgb(229, 246, 253)',
      dark: '#DD4C1E',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#3EC100',
      dark: '#219653',
      light: '#F7FCF4',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1D1F23',
      paper: 'linear-gradient(167.96deg, #262B2F 3.36%, #16191D 76.99%)',
    },
    text: {
      primary: '#D6E1EF',
      secondary: '#6D737A',
    },
    common: {
      black: '#17223F',
      white: '#FFFFFF',
    },
  },
})
export const lightTheme = createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#C1E27D',
      light: '#BEFB40',
      dark: '#A5C564',
      contrastText: '#f6f6f6',
    },
    secondary: {
      main: '#E3EDF7',
      light: '#E8EAFA',
      dark: '#6C7C94',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#DD4C1E',
      light: '#FFF5F5',
      dark: '#DD4C1E',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFB82E',
      light: '#FFFBF4',
      dark: '#FFB82E',
      contrastText: '#FFFFFF',
    },
    info: {
      main: 'rgba(31, 23, 18, 0.3)',
      light: 'rgb(229, 246, 253)',
      dark: '#DD4C1E',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#3EC100',
      dark: '#219653',
      light: '#F7FCF4',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#EBF3FA',
      paper: 'linear-gradient(180deg, #F1F5F8 0%, #EBF3FA 0.01%, #DDE7F3 53.92%, #E6F0F9 100%)',
    },
    text: {
      primary: '#31456A',
      secondary: '#6D737A',
    },
    common: {
      black: '#111',
      white: '#fff',
    },
  },
  components: {
    MuiSwitch: {
      defaultProps: {
        focusVisibleClassName: 'Mui-focusVisible',
      },
      styleOverrides: {
        thumb: {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
          background: 'linear-gradient(129.58deg, #E6EEF8 0%, #FFFFFF 111.48%)',
        },
        track: {
          borderRadius: 26 / 2,
          position: 'relative',
          backgroundColor: '#E3EDF7',
          opacity: 1,
          boxShadow: 'inset 2px 2px 5px rgba(105, 141, 173, 0.4)',
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
        switchBase: {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            '& + .MuiSwitch-track': {
              backgroundColor: '#E3EDF7',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.3,
          },
        },
        root: {
          width: 42,
          height: 26,
          padding: 0,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          textDecoration: 'none',
          fontSize: '1em',
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 600,
          lineHeight: '120%',
          cursor: 'pointer',
          position: 'relative',
          color: '#fff',
          transition: theme.transitions.create(['color', 'transform'], { duration: 200 }),
          '&.unstyled': {
            '&::before': {
              display: 'none',
            },
          },
          '&::before': {
            content: '""',
            height: 2,
            width: '100%',
            background: '#C1E27D',
            position: 'absolute',
            bottom: -5,
            left: 0,
            zIndex: 3,
            transform: 'scaleX(0)',
            transformOrigin: '0 50%',
            transition: 'transform .4s',
            transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.3, 1)',
          },
          '&:hover': {
            color: '#C1E27D',
            '&::before': {
              transform: 'scaleX(1)',
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        track: {
          background: 'linear-gradient(89.72deg, #F0F4F9 -4.95%, #587CA5 578.66%)',
          maxWidth: 'calc(100% - 4px)',
          left: '2px !important',
          boxShadow:
            '-1px 2px 2px rgba(24, 55, 91, 0.1), inset 0px 0px 4px rgba(46, 68, 87, 0.02), inset 0px -2px 1px rgba(39, 81, 126, 0.12)',
          backdropFilter: 'blur(14px)',
          border: 'none',
          height: 12,
        },
        rail: {
          background: 'linear-gradient(8.37deg, #FFFFFF -30.86%, #ECF1F7 -10.72%, #CFDCEB 112.31%)',
          boxShadow: 'inset -4px -4px 4px rgba(255, 255, 255, 0.7), inset 4px 4px 6px rgba(18, 46, 101, 0.1)',
          height: 16,
        },
        thumb: {
          display: 'none',
        },
        root: {
          position: 'relative',
          height: 20,
        },
      },
    },

    MuiButton: {
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            background: '#C1E27D',
            color: '#242424',
            transition: 'all 1s ease',
            boxShadow: '-4px -2px 16px #FFFFFF, 4px 2px 16px rgba(136, 165, 191, 0.54)',
            fontWeight: 600,
            borderRadius: 16,
            minHeight: 64,
            '& p': {
              color: '#111',
              fontSize: 18,
              fontWeight: 500,
              textAlign: 'left',
              width: '100%',
              paddingLeft: theme.spacing(3),
            },
            ':hover': {
              boxShadow: '-4px -2px 16px #FFFFFF, 4px 2px 16px rgba(136, 165, 191, 0.54)',
              background: '#BEFB40',
              '& p': {
                color: '#111',
              },
            },
          },
        },
      ],
      styleOverrides: {
        sizeLarge: {
          height: 50,
          fontSize: 18,
          fontWeight: 600,
          lineHeight: 1.2,
          padding: '6px 16px',
          textTransform: 'none',
          boxShadow: 'none',
          fontFamily: `'Montserrat', sans-serif`,
        },
        sizeMedium: {
          height: 38,
          fontSize: 15,
          fontWeight: 600,
          lineHeight: 1.2,
          padding: '10px 16px',
          borderRadius: 10,
          textTransform: 'none',
          boxShadow: 'none',
          fontFamily: `'Montserrat', sans-serif`,
        },
        sizeSmall: {
          height: 30,
          fontSize: 15,
          fontWeight: 600,
          lineHeight: 1.2,
          padding: '6px 16px',
          textTransform: 'none',
          borderRadius: 10,
          boxShadow: 'none',
          fontFamily: `'Montserrat', sans-serif`,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiSnackbarContent-message': {
            borderRadius: 6,
            background: '#C1E27D',
            boxShadow: '-8px -4px 16px rgba(255, 255, 255, 0.6), 6px 4px 24px rgba(136, 165, 191, 0.36)',
            fontWeight: 700,
            color: theme.palette.text.primary,
            fontSize: 14,
            padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
          },
          '& .MuiSnackbarContent-root': {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',

            boxShadow: '-4px -2px 16px #FFFFFF, 4px 2px 16px rgba(136, 165, 191, 0.54)',
            background: '#E3EDF7',
            marginLeft: theme.spacing(4),
            borderRadius: theme.shape.borderRadius,
            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: '#fff',
          height: 3,
          borderRadius: 6,
        },
      },
    },
  },
})

export default theme
