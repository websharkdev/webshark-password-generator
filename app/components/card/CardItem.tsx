import { Box, Grid, styled } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import { EthereumIcon } from '@/assets/icons/ui'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  minHeight: 188,
  width: 320,
  borderRadius: theme.shape.borderRadius,
  background: 'linear-gradient(95.54deg, #DEC9E9 -12.24%, #C77DFF 19.94%, #7B2CBF 72.87%)',
}))

export const CardItem: FC<Props> = (props) => {
  return (
    <Root container wrap="nowrap" direction={'column'} justifyContent="center" alignItems={'center'}>
      <Grid item xs={12}>
        <Image src={EthereumIcon} alt="ethereum-icon" width={32} />
      </Grid>
    </Root>
  )
}
