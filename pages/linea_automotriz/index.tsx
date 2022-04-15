import type { NextPage } from 'next'
import { Layout } from '../../components/layout'
import { HeadingPrimary } from '../../components/ui'


const LineAutomotrizPage: NextPage = () => {
  return (
    <Layout title={'Choco - Linea Automotriz'} pageDescription={'Nuestra tienda'}>
      <HeadingPrimary titleP='Linea Automotriz'/>
    </Layout>
  )
}

export default LineAutomotrizPage