import { Grid, IconButton, Typography, styled } from '@mui/material'
import moment from 'moment'
import Image from 'next/dist/client/image'
import { FC, useContext } from 'react'

import { useCopyToClipboard } from '@/shared/hooks'

import { CopyIcon, CopyLightIcon, TrashIcon, TrashLightIcon } from '@/assets/icons/ui'

import { ColorModeContext } from '@/providers/customThemeProvider/CustomThemeProvider'

type Props = {
  data: string[]
  LSData: string[]
  setLSData: (LSData: string[]) => void
  setIsRemoved: (isRemoved: boolean) => void
  setIsOpen: (isOpen: boolean) => void
}

const Root = styled(Grid)(({ theme }) => ({}))

export const PasswordHistoryItem: FC<Props> = ({ data, setIsRemoved, setIsOpen, LSData, setLSData }) => {
  const date = moment(data[1]).format('MM.DD.YYYY h:mm A')
  const [value, copyToClip] = useCopyToClipboard()
  const colorMode = useContext(ColorModeContext)

  const getIDLS = () => {
    const res = LSData.filter((item) => item !== `${data[0]}|${data[1]}`)
    window.localStorage.setItem('password_history', res.toLocaleString())
    setLSData(res)
    setIsRemoved(true)
  }

  return (
    <Root container justifyContent={'space-between'}>
      <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'max-content' }}>
        <IconButton
          className="home-body--icon"
          onClick={() => {
            copyToClip(data[0])
            setIsOpen(true)
          }}
        >
          {colorMode.mode === 'light' ? <Image src={CopyLightIcon} /> : <Image src={CopyIcon} />}
        </IconButton>
        <Typography className="home-body--text">{data[0]}</Typography>
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'max-content' }}>
        <Typography className="home-body--text" sx={{ pl: '0 !important', mr: 3 }}>
          {date}
        </Typography>
        <IconButton className="home-body--icon" onClick={getIDLS}>
          {colorMode.mode === 'light' ? <Image src={TrashLightIcon} /> : <Image src={TrashIcon} />}
        </IconButton>
      </Grid>
    </Root>
  )
}
