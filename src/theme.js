// import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

import { grey, pink } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    navBarHeight: '48px',
    boardBarHeight: '58px'
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: pink[300]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: grey[900]
        }
      }
    }
  }
  //   colorSchemes: {
  //     light: {
  //       palette: {
  //         primary: {
  //           main: pink[600]
  //         }
  //       }
  //     },
  //     dark: {
  //       palette: {
  //         primary: {
  //           main: cyan,
  //           secondary: orange
  //         }
  //       }
  //     }
  //   }
  //other properties
})
export default theme
