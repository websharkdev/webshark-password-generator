import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { Home } from '@/screens/Home'

import Meta from '@/utils/meta/Meta'

const HomePage: NextPage = () => {
  return (
    <Meta title="Home" description="Some description of page.">
      <Layout>
        <Home />
      </Layout>
    </Meta>
  )
}

export default HomePage
