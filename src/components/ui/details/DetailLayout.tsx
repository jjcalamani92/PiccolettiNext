
import { CardLayout } from "../card/CardLayout";
import { ProductComponent } from "../../pages/product/ProductComponent";

import { DetailImage } from "./DetailImage";
import { DetailContent } from "./DetailContent";

interface State {
  products: any;
}

export const DetailLayout = ({products}:State) => {
  return (
    <>
      
      <section className="detail">
        {/* <!-- card left --> */}
        <DetailImage products={products} />
        {/* <!-- card right --> */}
        <DetailContent products={products} />
      </section>

      
    </>
  );
};
