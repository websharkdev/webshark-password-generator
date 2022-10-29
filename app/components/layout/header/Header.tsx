import { Box, Grid, IconButton, Menu, MenuItem, Tooltip, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, MouseEvent, useState } from 'react'

import { BurgerClosetIcon, BurgerOpenedIcon } from '@/assets/icons/ui'

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
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Root>
      <Box>
        <Image src={data.logo} alt="logo image" className="header-menu--logo" width="120px" />
      </Box>
      <Grid className="header-menu--listMenu" container columnSpacing={6} justifyContent="flex-end" alignItems="center">
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
      <IconButton
        onClick={handleClick}
        size="small"
        className="header-menu--burgerMenu"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {open ? (
          <Image src={BurgerOpenedIcon} alt="burger-opened-icon" width={24} />
        ) : (
          <Image src={BurgerClosetIcon} alt="burger-opened-icon" width={24} />
        )}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="burger-menu"
        className="header-menu--burgerMenuContainer"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {data.menu.map((item) => (
          <MenuItem
            key={item.id}
            sx={{
              '& a': {
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
              },
            }}
            className={`header-burgerMenu--item ${router.pathname === item.href ? 'active' : ''}`}
          >
            <Link href={item.href}>{item.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Root>
  )
}
