import { FC } from 'react'

import Layout from '@/components/layout'

import { Home } from '@/screens/Home'

import Meta from '@/utils/meta'

const HomePage: FC = () => (
  <Meta title="Home" description="Some description of page.">
    <Layout>
      <Home />
    </Layout>
  </Meta>
)

export default HomePage
