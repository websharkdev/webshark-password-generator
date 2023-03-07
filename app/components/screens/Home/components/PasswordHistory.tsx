import { Grid, Typography, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { PasswordHistoryItem } from './PasswordHistoryItem'

type Props = {
  setIsRemoved: (isRemoved: boolean) => void
  setIsOpen: (isOpen: boolean) => void
  isRemoved: boolean
  password: string
}

const Root = styled(Grid)(({ theme }) => ({}))

export const PasswordHistory: FC<Props> = ({ setIsRemoved, isRemoved, password, setIsOpen }) => {
  const [LSData, setLSData] = useState<string[]>()
  useEffect(() => {
    const data = window.localStorage.getItem('password_history')
      ? window.localStorage.getItem('password_history')!.split(',').flat()
      : []
    setLSData(data)
  }, [password, isRemoved])

  return (
    <Root container rowSpacing={5} flexDirection="column" flexWrap="nowrap">
      <Grid item xs={12}>
        <Typography className="home-body--title" variant="h3">
          Generated password history
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {LSData && LSData.length > 0 ? (
          <Grid container rowGap={4} flexDirection="column" flexWrap="nowrap">
            {LSData?.map((password: string, id: number) => (
              <Grid item xs={12} key={id} className="home-body--item">
                <PasswordHistoryItem
                  setIsOpen={setIsOpen}
                  setIsRemoved={setIsRemoved}
                  setLSData={setLSData}
                  LSData={LSData}
                  data={password!.split('|').flat()}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            Create your first password!
          </Typography>
        )}
      </Grid>
    </Root>
  )
}
