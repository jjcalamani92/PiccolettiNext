import NextLink from 'next/link';
import { initialData } from '../../../../data'

export const HeaderLogo = () => {
  const { date } = initialData
	return (
		<div className="logo">
			<NextLink href='/' passHref>
			<img
					src={`${date.logo}`}
					alt=""
				/>
      </NextLink>
		</div>
	);
};
