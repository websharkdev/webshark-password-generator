import { Grid, Switch, styled, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useContext, useState } from 'react'

import { ColorModeContext } from '@/providers/customThemeProvider/CustomThemeProvider'

import { data } from './data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
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
    color: theme.palette.primary.contrastText,
  },

  '& .header-menu--burgerMenu': {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  '& .header-menu--listMenu': {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}))

export const Header: FC<Props> = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <Root container columnGap={5}>
      <Grid item flex={1}>
        <Image src={data.logo} alt="logo image" className="header-menu--logo" width="120px" />
        {theme.palette.mode} mode
        {theme.palette.mode === 'dark' ? <>123</> : <>321</>}
      </Grid>
      <Grid item className="header-menu--listMenu">
        <Grid container columnSpacing={6} justifyContent="flex-end" alignItems="center">
          {data.menu.map((item) => (
            <Grid item xs={'auto'} key={item.id} className={`header-menu--item`}>
              <Link href={item.href}>{item.name}</Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Switch
          aria-label="password-rule-switch"
          checked={theme.palette.mode === 'light'}
          onChange={colorMode.toggleColorMode}
          color="default"
        />
      </Grid>
    </Root>
  )
}
