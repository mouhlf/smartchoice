const DefaultPalette = (mode, skin) => {
  // ** Vars
  const whiteColor = '#FFF'
  const lightColor = '0, 103, 255'
  const darkColor = '17, 32, 52'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return whiteColor
    } else if (skin === 'bordered' && mode === 'dark') {
      return darkColor
    } else if (mode === 'light') {
             return whiteColor
           } else {
             return darkColor
           }
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      whiteBlue:'#F6F7FB',
      darkBg: '#283242',
      lightBg: '#FFF',
      bodyBg: mode === 'light' ? whiteColor : '#277FE5',
      trackBg: mode === 'light' ? whiteColor : '#277FE5',
      tooltipBg: mode === 'light' ? '#262732' : '#223D5C',
      tableHeaderBg: mode === 'light' ? '#F5F5F7' : '#223D5C'
    },
    mode: mode,
    common: {
      black: '#000',
      white: whiteColor
    },
    primary: {
      light: '#80B3FF',
      main: '#0067FF',
      dark: '#0A5CD5',
      contrastText: whiteColor
    },
    secondary: {
      light: '#525666',
      main: '#393C47',
      dark: '#292B33',
      contrastText: whiteColor
    },
    error: {
      light: '#FF625F',
      main: '#FF4D49',
      dark: '#E04440',
      contrastText: whiteColor
    },
    warning: {
      light: '#FDBE42',
      main: '#FDB528',
      dark: '#DF9F23',
      contrastText: whiteColor
    },
    info: {
      light: '#40CDFA',
      main: '#26C6F9',
      dark: '#21AEDB',
      contrastText: whiteColor
    },
    success: {
      light: '#83E542',
      main: '#72E128',
      dark: '#64C623',
      contrastText: whiteColor
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      750: '#585858',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: `#393C47`,
      secondary: `#393C47, 0.6)`,
      disabled: `#393C47, 0.38)`
    },
    divider: `rgba(57, 60, 71, 0.12)`,
    background: {
      paper: mode === 'light' ? whiteColor : '#F6F7FB',
      secondary: '#F6F7FB',
      default: defaultBgColor()
    },
    action: {
      active: `#393C47`,
      hover: `rgba(${mainColor}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`
    },
    linearTextGradient: {
      background: "linear-gradient(to top, #FFFFFF 0%, #fff 100%)",
      WebkitBackgroundClip: `text`,
      WebkitTextFillColor: `transparent`
    }
  }
}

export default DefaultPalette
