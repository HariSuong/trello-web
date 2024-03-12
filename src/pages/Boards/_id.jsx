import Container from '@mui/material/Container'

import BoardContent from './BoardContent'
import AppBar from '../../components/Appbar'
import BoardBar from '../Boards/BoarddBar'

const Board = () => {
  return (
    <Container sx={{ height: '100vh' }} disableGutters maxWidth='false'>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
