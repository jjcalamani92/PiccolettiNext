import type { NextPage } from 'next'
import { Layout } from '../../components/layout'
import { HeadingPrimary } from '../../components/ui'


const ServiciosPage: NextPage = () => {
  return (
    <Layout title={'Choco - Servicios'} pageDescription={'Nuestros Servicios'}>
      <HeadingPrimary titleP='Nuestros Servicios'/>
    </Layout>
  )
}

export default ServiciosPage
