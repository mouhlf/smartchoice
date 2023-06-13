const Typography = theme => {
  return {
    logo: {
      fontSize: '32px',
      fontWeight: 600,
      color: theme.palette.text.primary
    },
    productPrice: {
      fontSize: '18px',
      fontWeight: 600,
      color: theme.palette.text.primary
    },
    productTitle: {
      fontSize: '14px',
      fontWeight: 400,
      color: theme.palette.text.primary
    },
    discount: {
      fontSize: '28px',
      fontWeight: 700,
    },
    title: {
      fontSize: '32px',
      fontWeight: 700,
      color: theme.palette.primary.main
    },
    rating: {
      fontSize: '50px',
      fontWeight: 400,
      color: theme.palette.text.primary
    },
    productVariation: {
      fontSize: '20px',
      fontWeight: 600,
      color: theme.palette.text.primary
    },
    welcome: {
      fontSize: '56px',
      fontWeight: 200,
      fontFamily: 'Poppins, sans-serif',
      fontStyle: 'italic',
      lineHeight: 1.5,
      color: theme.palette.common.white
      
    },
    h1: {
      fontWeight: 500,
      letterSpacing: '-1.5px',
      color: theme.palette.text.primary
    },
    h2: {
      fontWeight: 500,
      letterSpacing: '-0.5px',
      color: theme.palette.text.primary
    },
    h3: {
      fontWeight: 500,
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h4: {
      fontWeight: 500,
      letterSpacing: '0.25px',
      color: theme.palette.text.primary
    },
    h5: {
      fontWeight: 500,
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h6: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    subtitle1: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    subtitle2: {
      letterSpacing: '0.1px',
      color: theme.palette.text.secondary
    },
    body1: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    body2: {
      lineHeight: 1.429,
      letterSpacing: '0.15px',
      color: theme.palette.text.secondary
    },
    button: {
      letterSpacing: '0.4px',
      color: theme.palette.text.primary
    },
    caption: {
      lineHeight: 1.25,
      letterSpacing: '0.4px',
      color: theme.palette.text.secondary
    },
    overline: {
      letterSpacing: '1px',
      color: theme.palette.text.secondary
    }
  }
}

export default Typography
