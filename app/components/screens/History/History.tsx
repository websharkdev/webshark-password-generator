import { Alert, Box, Button, Grid, IconButton, Snackbar, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import useCopyToClipboard from 'shared/hooks/useCopyToClipboard.hook'

import styles from '@/screens/History/history.module.sass'

import { CloseIcon, CopyIcon, TrashIcon } from '@/assets/icons/ui'

type Props = {}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}))

const Body = styled(Grid)(({ theme }) => ({
  padding: '55px',
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  '& .home-body--title': {
    color: theme.palette.primary.contrastText,
  },
  '& .history-password--item': {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    marginTop: 15,
    background: '#242424',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.contrastText,
    cursor: 'pointer',
  },
}))

export const History: FC<Props> = (props) => {
  const [history, setHistory] = useState<string[]>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, copyToClip] = useCopyToClipboard()

  useEffect(() => {
    const wrapPassword = () => {
      setHistory(window.localStorage.getItem('password_history')!.split(',').flat())
    }

    wrapPassword()
  }, [history])

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsOpen(false)
  }

  const action = (
    <Button color="secondary" variant="outlined" size="small" onClick={handleClose}>
      UNDO
    </Button>
  )

  return (
    <Root>
      <Box sx={{ width: { xs: 'calc(100% - 24px)', md: '85%', lg: 605 } }}>
        <Body container rowSpacing={2}>
          <Grid item xs={11} mb={2}>
            <Typography variant="h5" className="home-body--title">
              Password Generator
            </Typography>
          </Grid>
          <Grid item xs={1} mb={2}>
            <Button onClick={() => window.localStorage.setItem('password_history', '')}>
              <Image src={TrashIcon} alt="trash-icon" width="18px" />
            </Button>
          </Grid>

          {history?.map((item: string, id: number) => (
            <>
              {item ? (
                <Grid
                  item
                  xs={12}
                  className="history-password--item"
                  key={item}
                  onClick={() => copyToClip(item)}
                  onDoubleClick={() => setIsOpen(true)}
                >
                  <Button sx={{ mr: 2, width: 'max-content', padding: '4px', minWidth: 38 }}>
                    <Image src={CopyIcon} width="24" />
                  </Button>
                  <Typography variant="body1" fontWeight={600}>
                    {item}
                  </Typography>
                </Grid>
              ) : (
                <Grid item xs={12} key={id}>
                  <Typography variant="body1" color="primary.contrastText" fontWeight={600}>
                    Create your first password
                  </Typography>
                </Grid>
              )}
            </>
          ))}

          <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose} message="Coppyed!" action={action} />
        </Body>
      </Box>
    </Root>
  )
}
