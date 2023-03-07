import { Grid, Snackbar, styled } from '@mui/material'
import { FC, useContext, useState } from 'react'

import styles from '@/screens/Home/home.module.sass'

import { ColorModeContext } from '@/providers/customThemeProvider/CustomThemeProvider'

import { PasswordGenerator } from './components'
import { PasswordHistory } from './components/PasswordHistory'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
  margin: '0 auto',
  padding: `0 ${theme.spacing(4)}`,
  overflow: 'hidden',
  background: theme.palette.background.default,
}))

const Body = styled(Grid)(({ theme }) => ({
  padding: '36px 34px',
  [theme.breakpoints.down('md')]: {
    padding: '36px 34px',
  },
  overflow: 'hidden',
  height: 'max-content',
  background: theme.palette.background.paper,
  borderRadius: 30,
  '&.light-mode': {
    border: '1px solid #fff',
    '& .home-body--item': {
      color: theme.palette.primary.contrastText,
      boxShadow: '-4px -2px 16px #FFFFFF, 4px 2px 16px rgba(136, 165, 191, 0.54)',
      background: '#E3EDF7',
      width: '100%',
      minHeight: 64,
      padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
      borderRadius: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& p': {
        paddingLeft: theme.spacing(3),
        width: '100%',
      },
      '&.home-body--itemButton': {
        background: '#C1E27D',
        paddingLeft: theme.spacing(3),
        '& p': {
          color: theme.palette.text.primary,
        },
        '&:hover': {
          background: '#BEFB40',
        },
      },
    },
    '& .home-body--icon': {
      background: '#E3EDF7',
      color: theme.palette.primary.contrastText,
      boxShadow: '-4px -2px 16px #FFFFFF, 4px 2px 16px rgba(136, 165, 191, 0.48)',
      padding: 10,
      minWidth: 36,
      minHeight: 36,
      borderRadius: '50%',
    },
  },
  '&.dark-mode': {
    border: '1px solid #242424',
    '& .home-body--item': {
      color: theme.palette.primary.contrastText,
      boxShadow: '-5px -6px 16px rgba(195, 200, 205, 0.04), 6px 6px 28px rgba(0, 0, 0, 0.3)',
      background: 'linear-gradient(94.6deg, #32383E -60.81%, #17191C 185.78%)',
      width: '100%',
      minHeight: 64,
      padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
      borderRadius: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& p': {
        paddingLeft: theme.spacing(3),
        width: '100%',
      },
      '&.home-body--itemButton': {
        background: '#C1E27D',
        paddingLeft: theme.spacing(3),
        '& p': {
          color: theme.palette.text.primary,
        },
        '&:hover': {
          background: '#BEFB40',
        },
      },
    },
    '& .home-body--icon': {
      background: 'linear-gradient(133.71deg, #32383E -30.53%, #17191C 126.55%)',
      color: theme.palette.primary.contrastText,
      padding: 10,
      minWidth: 36,
      minHeight: 36,
      borderRadius: '50%',
    },
  },
  '& .home-body--title': {
    color: theme.palette.text.primary,
    fontSize: 36,
    fontWeight: 700,
    lineHeight: '36px',
  },
  '& .home-body--text': {
    textAlign: 'left',
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    '& span': {
      fontWeight: 700,
    },
  },
}))

export const Home: FC<Props> = (props) => {
  const [password, setPassword] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isRemoved, setIsRemoved] = useState<boolean>(false)
  const colorMode = useContext(ColorModeContext)

  // const Action = ({ onClick }: any) => (
  //   <Button color="secondary" variant="outlined" onClick={onClick} size="small">
  //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <rect width="24" height="24" rx="12" fill="#292836" />
  //       <path
  //         d="M8.15028 7.05025C7.84654 6.74651 7.35407 6.74651 7.05033 7.05025C6.74659 7.35399 6.74659 7.84646 7.05033 8.1502L10.9001 12L7.05033 15.8498C6.74659 16.1535 6.74659 16.646 7.05033 16.9497C7.35407 17.2535 7.84654 17.2535 8.15028 16.9497L12.0001 13.0999L15.8499 16.9497C16.1536 17.2535 16.6461 17.2535 16.9498 16.9497C17.2536 16.646 17.2536 16.1535 16.9498 15.8498L13.1 12L16.9498 8.1502C17.2536 7.84646 17.2536 7.35399 16.9498 7.05025C16.6461 6.74651 16.1536 6.74651 15.8499 7.05025L12.0001 10.9001L8.15028 7.05025Z"
  //         fill="#F2F2F2"
  //       />
  //     </svg>
  //   </Button>
  // )
  return (
    <Root container className={`${styles.Root}`} columnGap={3}>
      <Body item maxWidth={600} xs={4} className={`${colorMode.mode}-mode`}>
        <PasswordGenerator setPassword={setPassword} password={password} setIsOpen={setIsOpen} />
      </Body>
      <Body item xs={8} className={`${colorMode.mode}-mode`}>
        <PasswordHistory setIsOpen={setIsOpen} setIsRemoved={setIsRemoved} isRemoved={isRemoved} password={password} />
      </Body>
      <Snackbar
        open={isOpen}
        autoHideDuration={4000}
        onClose={(event: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === 'clickaway') {
            return
          }
          setIsOpen(false)
        }}
        message="Coppyed!"
      />
      <Snackbar
        open={isRemoved}
        autoHideDuration={4000}
        onClose={(event: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === 'clickaway') {
            return
          }
          setIsRemoved(false)
        }}
        message="Deleted!"
      />
    </Root>
  )
}
