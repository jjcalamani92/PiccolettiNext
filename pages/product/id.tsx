import type { NextPage } from 'next'
import { initialDataProduct } from '../../data';
import { Layout } from '../../src/components/layout'
import { DetailLayout, HeadingPrimary } from '../../src/components/ui'


const ProductPage: NextPage = () => {
  	const { products } = initialDataProduct;
  return (
    <Layout title={'Chamarra Para Hombre Akiral - Gris'} pageDescription={'Precio: Bs 649.00'} imageFullUrl={products[1].image[0]}>
      <HeadingPrimary titleP='Detalles del producto'/>
      <DetailLayout products={products[0]} />
    </Layout>
  )
}

export default ProductPage
