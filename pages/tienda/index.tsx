import type { NextPage } from 'next'
import { Layout } from '../../src/components/layout'
import { HeadingPrimary } from '../../src/components/ui'
import { TiendaPages } from '../../src/components/page/tienda/TiendaPages.tsx'

const TiendaPage: NextPage = () => {
  return (
    <Layout title={'Piccoletti - Tienda'} pageDescription={'Nuestra tienda'}>
      <HeadingPrimary titleP='Nuestra Tienda'/>
      <TiendaPages/>
    </Layout>
  )
}

export default TiendaPage
