import { motion, useScroll } from 'framer-motion'
import { FC, ReactElement } from 'react'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import { HelpUkraine } from './HelpUkraine'
import styles from './layout.module.sass'

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  const { scrollYProgress } = useScroll()
  return (
    <div className={styles.layout}>
      <motion.div className={styles.ProgressBar} style={{ scaleX: scrollYProgress }} />
      <Header />

      <div className={styles.page}>{children}</div>
      <HelpUkraine />
      <Footer />
    </div>
  )
}

export default Layout
