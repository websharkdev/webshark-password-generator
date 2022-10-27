import { Box, Button, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'

import { Card } from '@/components/card'
import { data } from '@/components/layout/header/data'

import styles from '@/screens/Home/home.module.sass'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  '& .home-content--container': {
    padding: '20px 0',
    '& .home-content--title': {
      fontSize: 56,
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
    '& .home-content--text': {
      fontSize: 16,
      fontWeight: 500,
      color: theme.palette.text.primary,
      width: '75%',
      margin: '16px 0',
    },
  },

  '& .home-content--table': {
    border: '1px solid #fff',
    padding: '20px 30px',
    borderRadius: theme.shape.borderRadius,
    '& .home-content--tableItem': {
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      '&.home-content--tableItem-middle': {
        borderRight: '1px solid #fff',
        borderLeft: '1px solid #fff',
      },
    },
  },
}))

export const Home: FC<Props> = (props) => {
  return <Root container className={styles.Root}></Root>
}
