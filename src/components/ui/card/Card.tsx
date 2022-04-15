import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';

import { FC } from 'react';
import { IProduct } from '../../../interface';

interface Props {
	Products: IProduct;
}

export const CardLayout: FC<Props> = ({ Products }) => {
	return (
		<NextLink href={`/product/id`} passHref prefetch={ false }>
			<a className="card">
				<div className="image">
					<img src={`${Products.image[0]}`} alt={`${Products.title}`} />
				</div>
				<div className="content">
					<h3>{Products.title}</h3>
					<div className="stars">
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
					</div>
					<div className="price">
						Bs {Products.price} <span>Bs {Products.oldPrice}</span>
					</div>
				</div>
			</a>
		</NextLink>
	);
};
