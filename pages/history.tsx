import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { History } from '@/screens/History'

import Meta from '@/utils/meta/Meta'

const HistoryPage: NextPage = () => (
  <Meta title="History" description="Password Generator History page">
    <Layout>
      <History />
    </Layout>
  </Meta>
)

export default HistoryPage
