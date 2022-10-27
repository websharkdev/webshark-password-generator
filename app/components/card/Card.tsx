import { Box, Grid, styled } from '@mui/material'
import { FC } from 'react'

import { CardItem } from './CardItem'

type Props = {}

const Root = styled(Box)(({ theme }) => ({}))

export const Card: FC<Props> = (props) => {
  return (
    <Root className="home-card--container">
      <Grid container wrap="nowrap" direction={'column'} justifyContent="center" alignItems={'center'}>
        <Grid
          item
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <CardItem />
        </Grid>
      </Grid>
    </Root>
  )
}
