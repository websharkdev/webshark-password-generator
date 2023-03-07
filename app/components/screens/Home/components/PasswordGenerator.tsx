import { Box, Button, Divider, Grid, Slider, Stack, Typography, styled } from '@mui/material'
import moment from 'moment'
import Image from 'next/dist/client/image'
import { FC, useContext, useState } from 'react'

import { useCopyToClipboard } from '@/shared/hooks'

import { CopyIcon, CopyLightIcon } from '@/assets/icons/ui'

import { ColorModeContext } from '@/providers/customThemeProvider/CustomThemeProvider'

import { PasswordRule } from './PasswordRule'

type Props = {
  setPassword: (password: string) => void
  setIsOpen: (isOpen: boolean) => void
  password: string
}

const Root = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
}))

export const PasswordGenerator: FC<Props> = ({ setPassword, password, setIsOpen }) => {
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
  const colorMode = useContext(ColorModeContext)

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
    const currentDate = moment().format()
    const LSPasswordHistory = window.localStorage.getItem('password_history')

    const passwords: string = `${LSPasswordHistory || ''}${
      LSPasswordHistory ? ',' : ''
    } ${currentPassword} | ${currentDate}`

    window.localStorage.setItem('password_history', passwords)
    setPassword(currentPassword)
  }

  return (
    <Root container rowSpacing={5}>
      <Grid item xs={12}>
        <Typography variant="h5" className="home-body--title">
          Password Generator
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          className="home-body--item"
          sx={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap',
            flexDirection: 'row',
          }}
          onClick={() => {
            copyToClip(password)
            password !== '' ? setIsOpen(true) : null
          }}
        >
          <Typography variant="body2" className="home-body--text">
            {password === '' ? 'Click Generate' : password}
          </Typography>
          <Stack className="home-body--icon">
            {colorMode.mode === 'light' ? <Image src={CopyLightIcon} /> : <Image src={CopyIcon} />}
          </Stack>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography className="home-body--text">
          Length <span>{rules.count.value}</span>
        </Typography>

        <Stack alignItems="center" justifyContent="space-between">
          <Slider
            aria-label="Letter count"
            value={rules.count.value}
            min={5}
            max={35}
            onChange={(event: Event, newValue: number | number[]) => {
              setRules({ ...rules, count: { ...rules.count, value: newValue as number } })
            }}
          />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="home-body--text">{rules.count.min}</span>
            <span className="home-body--text">{rules.count.max}</span>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography className="home-body--text" sx={{ mb: 4 }}>
          Settings
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <PasswordRule
              text="Include Uppercase"
              onChange={() => setRules({ ...rules, uppercase: !rules.uppercase })}
              checked={rules.uppercase}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordRule
              text="Include Lowercase"
              onChange={() => setRules({ ...rules, lowercase: !rules.lowercase })}
              checked={rules.lowercase}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordRule
              text="Include Numbers"
              onChange={() => setRules({ ...rules, numbers: !rules.numbers })}
              checked={rules.numbers}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordRule
              text="Include Symbols"
              onChange={() => setRules({ ...rules, symbols: !rules.symbols })}
              checked={rules.symbols}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider />
        <Button sx={{ mt: 4 }} fullWidth variant="contained" color="primary" onClick={generatePassword}>
          <Typography variant="body2">Generate Password</Typography>
        </Button>
      </Grid>
    </Root>
  )
}
