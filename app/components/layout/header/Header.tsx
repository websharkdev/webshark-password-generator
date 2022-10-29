import { Box, Button, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { data } from './data'

type Props = {}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  padding: '24px 68px',
  [theme.breakpoints.down('md')]: {
    padding: '24px',
  },
  '& .header-menu--item a': {
    textDecoration: 'none',
    fontWeight: 600,
    color: theme.palette.primary.dark,
  },
  '& .active.header-menu--item a': {
    color: theme.palette.primary.contrastText,
  },
}))

export const Header: FC<Props> = () => {
  const router = useRouter()
  return (
    <Root>
      <Box>
        <Image src={data.logo} alt="logo image" className="header-menu--logo" width="120px" />
      </Box>
      <Grid container columnSpacing={6} justifyContent="flex-end" alignItems="center">
        {data.menu.map((item) => (
          <Grid
            item
            xs={'auto'}
            key={item.id}
            className={`header-menu--item ${router.pathname === item.href ? 'active' : ''}`}
          >
            <Link href={item.href}>{item.name}</Link>
          </Grid>
        ))}
      </Grid>
    </Root>
  )
}
