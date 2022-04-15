import type { NextPage } from 'next'
import { Layout } from '../../../src/components/layout'
import { HeadingPrimary } from '../../../src/components/ui'

const RopaDeVaronPage: NextPage = () => {
  return (
    <Layout title={'Piccoletti - Ropa de Varon'} pageDescription={'Nuestros Servicios'}>
      <HeadingPrimary titleP='Ropa de Varon'/>
    </Layout>
  )
}

export default RopaDeVaronPage