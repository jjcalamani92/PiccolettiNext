import type { NextPage } from 'next'
import { Layout } from '../../src/components/layout'
import { HeadingPrimary } from '../../src/components/ui'

const RopaPage: NextPage = () => {
  return (
    <Layout title={'Piccoletti - Ropa'} pageDescription={'Nuestros Servicios'}>
      <HeadingPrimary titleP='Ropa'/>
    </Layout>
  )
}

export default RopaPage
