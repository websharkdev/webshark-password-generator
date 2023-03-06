import { Grid, Switch, Typography, styled } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'

type Props = {
  text: string
  onChange: () => void
  checked: boolean
}

const Root = styled(Grid)(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row',
}))

export const PasswordRule: FC<Props> = ({ text, onChange, checked }) => {
  return (
    <Root container className="home-body--item">
      <Grid item>
        <Typography variant="body2" className="home-body--text">
          {text}
        </Typography>
      </Grid>
      <Grid item>
        <Switch aria-label="password-rule-switch" checked={checked} color="default" onChange={onChange} />
      </Grid>
    </Root>
  )
}
