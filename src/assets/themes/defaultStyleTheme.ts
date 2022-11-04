import { extendTheme } from '@chakra-ui/react'

export const defaultTheme = extendTheme({
  colors: {
    white: '#FFFFFF',
    yellow: {
      dark: '#C47F17',
      medium: '#DBAC2C',
      light: '#F1E9C9',
    },
    purple: {
      dark: '#4B2995',
      medium: '#8047F8',
      light: '#EBE5F9',
    },
    base: {
      bg: '#FAFAFA',
      card: '#F3F2F2',
      input: '#EDEDED',
      button: '#E6E5E5',
      hover: '#D7D5D5',
      label: '#8D8686',
      text: '#574F4D',
      subtitle: '#403937',
      title: '#272221',
    },
  },
  components: {
    Text: {
      variants: {
        tag: {
          bg: '#F1E9C9',
          color: '#C47F17',
          fontSize: '0.625rem',
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 'bold',
          lineHeight: 1.3,
          p: '0.25rem 0.5rem',
          borderRadius: 100,
          marginRight: '0.25rem',
        },
        subtitle: {
          color: '#403937',
          fontSize: '1rem',
          fontFamily: "'Roboto', sans-serif",
          fontWeight: '400',
          lineHeight: 1.3,
        },
        text: {
          color: '#574F4D',
          fontSize: '0.875rem',
          fontFamily: "'Roboto', sans-serif",
          fontWeight: '400',
          lineHeight: 1.3,
        },
        ButtonS: {
          color: '#574F4D',
          fontSize: '0.75rem',
          fontFamily: "'Roboto', sans-serif",
          fontWeight: '400',
          lineHeight: 1.6,
        },
      },
    },
    Button: {
      variants: {
        inputButton: {
          bg: 'transparent',
          color: '#8047F8',
          p: '0',
          width: '15px',
          minWidth: '15px',
        },
      },
    },
  },
})
