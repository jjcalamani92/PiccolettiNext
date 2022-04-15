import type { NextPage } from 'next'
import { Layout } from '../../../src/components/layout'
import { ProductsPages } from '../../../src/components/page/producto/ProductsPages'
import { HeadingPrimary } from '../../../src/components/ui'

const RopaDeVaronPage: NextPage = () => {
  return (
    <Layout title={'Piccoletti - Ropa de Varon'} pageDescription={'Nuestros Servicios'}>
      <HeadingPrimary titleP='Ropa de Varon'/>
      <ProductsPages/>
    </Layout>
  )
}

export default RopaDeVaronPage