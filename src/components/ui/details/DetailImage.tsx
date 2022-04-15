
interface Props {
  products: any;
}

export const DetailImage = ({products}:Props) => {
  
  return (
    <div className="image">
          <div className="image-select">
            {products.image.map((img: any, i: any) => (
              <div className="img-item" key={i}>
                <img
                  src={img}
                  alt={products.title}
                
                />
              </div>
            ))}
          </div>
          <div className="image-display">
            <img src={`${products.image[0]}`} alt={`${products.title}`} />
          </div>
        </div>
  )
}
