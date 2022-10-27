import React, { FC, ReactElement, useState } from 'react'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import styles from './layout.module.sass'

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.page}> {children}</div>
      <Footer />
    </div>
  )
}

export default Layout
