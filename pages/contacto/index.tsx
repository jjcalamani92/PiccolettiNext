import type { NextPage } from 'next'
import { Layout } from '../../components/layout'
import { HeadingPrimary } from '../../components/ui'


const ContactoPage: NextPage = () => {
  return (
    <Layout title={'Choco - Contacto'} pageDescription={'Contacto'}>
      <HeadingPrimary titleP='Ponte en contacto'/>
    </Layout>
  )
}

export default ContactoPage