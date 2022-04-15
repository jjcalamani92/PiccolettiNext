import { initialDataProduct } from "../../../../data";
import { CardLayout } from "../../ui/card";



export const ProductComponent = () => {
	const { products } = initialDataProduct;

	return (
		<>
			<section className="product">
				{products.map((Products: any) => (
					<CardLayout key={Products.id} Products={Products} />
				))}
			</section>
		</>
	);
};
