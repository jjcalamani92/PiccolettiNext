
import type { NextPage } from 'next'
import { Layout } from '../src/components/layout'
import { HomePages } from '../src/components/page/home/HomePages'

const HomePage: NextPage = () => {
  return (
    <Layout title={'Piccoletti - Home'} pageDescription={'Encuentra tu ropa favorita'}>
      <HomePages/>
    </Layout>
  )
}

export default HomePage
