import { Box, Button, Grid, Slider, Snackbar, Stack, Switch, Typography, styled } from '@mui/material'
import { FC, useState } from 'react'
import useCopyToClipboard from 'shared/hooks/useCopyToClipboard.hook'

import styles from '@/screens/Home/home.module.sass'

type Props = {}

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}))

const Body = styled(Grid)(({ theme }) => ({
  padding: '55px',
  [theme.breakpoints.down('md')]: {
    padding: '18px',
  },
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  '& .home-body--title': {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  '& .home-body--clipboard': {
    color: theme.palette.primary.contrastText,
    width: '100%',
    minHeight: 55,
  },
  '& .home-body--generate': {
    background: 'linear-gradient(95.54deg, #B8B8FF -12.24%, #9381FF 19.94%, #7B2CBF 72.87%)',
    color: theme.palette.primary.contrastText,
    width: '100%',
    minHeight: 55,
  },
  '& .home-body--passwordRange': {
    width: 26,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
  },
  '& .home-body--ruleItem': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    marginTop: 15,
    background: '#242424',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.contrastText,
  },
}))

export const Home: FC<Props> = (props) => {
  const [password, setPassword] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [rules, setRules] = useState({
    count: {
      min: 5,
      value: 15,
      max: 35,
    },
    uppercase: false,
    lowercase: true,
    numbers: true,
    symbols: false,
  })
  const [value, copyToClip] = useCopyToClipboard()

  const randomSymbol = (count: number, code: number) => {
    return String.fromCharCode(Math.floor(Math.random() * count) + code)
  }

  const generatePassword = () => {
    const index = []

    for (let i = 0; i < rules.count.value; i++) {
      index.push(randomSymbol(26, 97))
      rules.uppercase ? index.push(randomSymbol(26, 65)) : null
      rules.lowercase ? index.push(randomSymbol(26, 97)) : null
      rules.numbers ? index.push(randomSymbol(9, 47)) : null
      rules.symbols ? index.push(randomSymbol(15, 33).toLocaleLowerCase()) : null
    }
    const currentPassword = index.toString().split(',').join('').slice(0, rules.count.value)
    const LSPasswordHistory = window.localStorage.getItem('password_history')

    const passwords: string = `${LSPasswordHistory || ''}${LSPasswordHistory ? ',' : ''} ${currentPassword}`

    window.localStorage.setItem('password_history', passwords)
    setPassword(currentPassword)
  }

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
    <Root className={styles.Root}>
      <Box sx={{ width: { xs: 'calc(100% - 24px)', md: '85%', lg: 605 } }}>
        <Body container rowSpacing={2}>
          <Grid item xs={12} mb={2}>
            <Typography variant="h5" className="home-body--title">
              Password Generator
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              className="home-body--clipboard"
              color="secondary"
              variant="contained"
              onClick={() => {
                copyToClip(password)
                password !== '' ? setIsOpen(true) : null
              }}
            >
              {password === '' ? 'Click Generate' : password}
            </Button>
          </Grid>
          <Box width="100%" paddingY={4}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  color: '#f6f6f6',
                  fontWeight: 400,
                  fontSize: 14,
                  '& span': {
                    fontWeight: 600,
                  },
                }}
              >
                Length <span>{rules.count.value}</span>
              </Typography>

              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" justifyContent="space-between">
                <span className="home-body--passwordRange">{rules.count.min}</span>
                <Box width="85%">
                  <Slider
                    aria-label="Letter count"
                    value={rules.count.value}
                    min={5}
                    max={35}
                    onChange={(event: Event, newValue: number | number[]) => {
                      setRules({ ...rules, count: { ...rules.count, value: newValue as number } })
                    }}
                  />
                </Box>
                <span className="home-body--passwordRange">{rules.count.max}</span>
              </Stack>
            </Grid>

            <Grid item xs={12} mt={3}>
              <Typography
                sx={{
                  color: '#f6f6f6',
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                Settings
              </Typography>
            </Grid>

            <Grid item xs={12} className="home-body--ruleItem">
              <Typography sx={{ fontWeight: 500 }}>Include Uppercase</Typography>

              <Switch
                aria-label="password-rule-switch"
                checked={rules.uppercase}
                color="default"
                onChange={() => setRules({ ...rules, uppercase: !rules.uppercase })}
              />
            </Grid>

            <Grid item xs={12} className="home-body--ruleItem">
              <Typography sx={{ fontWeight: 500 }}>Include Lowercase</Typography>

              <Switch
                aria-label="password-rule-switch"
                checked={rules.lowercase}
                color="default"
                onChange={() => setRules({ ...rules, lowercase: !rules.lowercase })}
              />
            </Grid>

            <Grid item xs={12} className="home-body--ruleItem">
              <Typography sx={{ fontWeight: 500 }}>Include Numbers</Typography>

              <Switch
                aria-label="password-rule-switch"
                checked={rules.numbers}
                color="default"
                onChange={() => setRules({ ...rules, numbers: !rules.numbers })}
              />
            </Grid>

            <Grid item xs={12} className="home-body--ruleItem">
              <Typography sx={{ fontWeight: 500 }}>Include Symbols</Typography>

              <Switch
                aria-label="password-rule-switch"
                checked={rules.symbols}
                color="default"
                onChange={() => setRules({ ...rules, symbols: !rules.symbols })}
              />
            </Grid>
          </Box>
          <Grid item xs={12}>
            <Button className="home-body--generate" variant="contained" color="primary" onClick={generatePassword}>
              Generate Password
            </Button>
          </Grid>
        </Body>
      </Box>

      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose} message="Coppyed!" action={action} />
    </Root>
  )
}
