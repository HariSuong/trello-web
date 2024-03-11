// import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

import { cyan, deepOrange, orange, pink, red, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: pink[600]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: pink[400]
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
