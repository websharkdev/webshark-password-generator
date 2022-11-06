import { Box, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { GitHubIcon, InstagramIcon, TelegramIcon, buyMeACoffeQR } from '@/assets/icons/ui'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  flexWrap: 'nowrap',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
  },
  '& .footer-leftSide': {
    display: 'flex',
    alignItems: 'flex-end',
    background: '#DBFF5D',
    padding: '24px 34px',
    '& .footer-leftSide--divider': {
      marginTop: 20,
      height: 2,
      width: 39,
      background: '#B8B8FF',
    },
    '& .footer-leftSide--createdWithLove': {
      '& span': {
        color: '#f00',
      },
    },
  },
  '& .footer-rightSide': {
    background: '#240046',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '24px 34px',
    '& .footer-rightSide--divider': {
      marginBottom: 20,
      height: 2,
      width: 39,
      background: '#B8B8FF',
    },
    '& .footer-rightSide--link': {
      color: '#DEE2E6',
      textDecoration: 'none',
      fontWeight: 600,
    },
    '& .footer-rightSide--socialBox': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '120px',
    },
    '& .footer-rightSide--qrcodeBox': {
      padding: 12,
      background: '#fff',
      width: 'max-content',
      display: 'flex',
      marginTop: 20,
    },
  },
}))

export const Footer: FC<Props> = (props) => {
  return (
    <Root container>
      <Grid item xs={8} className="footer-leftSide">
        <Grid container>
          {/* <Grid item xs={9}>
            <Box>
              <Typography variant="h4">menu.</Typography>
              <Box className="footer-leftSide--divider" />
              <Box className="footer-leftSide--menu">
                <Link href="/">home</Link>
                <Link href="/">how to help Ukraine?</Link>
                <Link href="/">home</Link>
                <Link href="/">home</Link>
                <Link href="/">home</Link>
              </Box>
            </Box>
          </Grid> */}
          <Grid item xs={5}>
            <Box width={170}>
              <Typography variant="h4">Bortnytskyi Alexey.</Typography>
              <Box className="footer-leftSide--divider" />
              <Typography variant="body2" fontWeight={600} mt={3}>
                designer, developer, creator, and just a cool pepper.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="h6" className="footer-leftSide--createdWithLove">
              created in 2022 .//. with <span>❤</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} className="footer-rightSide">
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Box className="footer-rightSide--divider" />
            <a
              className="footer-rightSide--link"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:alexey.bortnytskyi@gmail.com"
            >
              alexey.bortnytskyi@gmail.com
            </a>
          </Grid>
          <Grid item xs={12}>
            <a className="footer-rightSide--link" rel="noopener noreferrer" target="_blank" href="tel:+34680522262">
              +34 680 522 262
            </a>
          </Grid>
          <Grid item xs={12}>
            <a
              className="footer-rightSide--link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae"
            >
              actual CV
            </a>
          </Grid>
          {/* <Grid item xs={12}>
            <a
              className="footer-rightSide--link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/CV-d9f17ad32676467f895a71b48974b6ae"
            >
              reacthero.blog
            </a>
          </Grid> */}
          <Grid item xs={12}>
            <Box className="footer-rightSide--socialBox">
              <Image width="24px" src={GitHubIcon} alt="GitHub Icon" />
              <Image width="24px" src={InstagramIcon} alt="Instagram Icon" />
              <Image width="24px" src={TelegramIcon} alt="Telegram Icon" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="footer-rightSide--qrcodeBox">
              <Image width="95px" height="95px" src={buyMeACoffeQR} alt="buyMeACoffeQR Icon" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
