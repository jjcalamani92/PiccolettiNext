import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faStar,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faPinterestP,
  faPinterest,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  products: any;
}

export const DetailContent = ({ products }: Props) => {
  const { title, price, oldPrice, description } = products;
  return (
    <div className="content">
      <h2 className="product-title">{title}</h2>
      {/* <a href = "#" className = "product-link">visit nike store</a> */}
      <div className="product-rating">
        <FontAwesomeIcon className="icon" icon={faStar} />
        <FontAwesomeIcon className="icon" icon={faStar} />
        <FontAwesomeIcon className="icon" icon={faStar} />
        <FontAwesomeIcon className="icon" icon={faStar} />
        <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
        <span>4.7(21)</span>
      </div>

      <div className="product-price">
        <p className="new-price">
          Precio: <span>Bs {price}.00 </span>
        </p>
      </div>

      <div className="product-detail">
        <h2>tallas: </h2>
        <div className="size">
          <a href="#">s</a>
          <a href="#">m</a>
          <a href="#">t</a>
        </div>
        <h2>sobre este producto: </h2>
        <p>{description}</p>
        <ul>
          <li>
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
            Color: <span>Como se muestra en la imagen</span>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
            Disponible: <span>en stock</span>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
            Categoria: <span>{products.category}</span>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
            Área de envio: <span>Todo el pais</span>
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
            Tarifa de envio: <span>Gratis</span>
          </li>
        </ul>
      </div>

      <div className="purchase-info">
        <input type="number" min="0" placeholder="1" />

        <button type="button" className="btn">
          Agregar al carrito <i className="fas fa-shopping-cart"></i>
        </button>

        <button type="button" className="btn">
          Realizar pedido
        </button>
      </div>

      <div className="social-links">
        <p>Compartir: </p>
        <div className="share">
          <a href="#">
            <FontAwesomeIcon className="iconS" icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="iconS" icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="iconS" icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="iconS" icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="iconS" icon={faPinterest} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="iconS" icon={faWhatsapp} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="iconS" icon={faTelegram} />
          </a>
        </div>
      </div>
    </div>
  );
};
