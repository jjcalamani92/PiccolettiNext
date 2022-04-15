import NextLink from 'next/link';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const dates = ['poliuretano', 'acrilico', 'gloss', 'base', 'protector_de_chasis', 'masilla', 'primer', 'mateante', 'kit']

export const HeaderNavbar = () => {

	return (
		<div className="navbar">
			<div className="nav-links">
				<ul>
					<li className="nav-link">
						<Link href="/tienda">
							<a>tienda</a>
						</Link>
					</li>
					<li className="nav-link">
						<Link href="/ropa">
							<a>ropa
							<FontAwesomeIcon className="icon" icon={faCaretDown} />
							</a>
						</Link>
						<div className="dropdown">
						<ul>
							<li className="dropdown-link" >
								<Link href="/ropa/hombre">
									<a>ropa de varon</a>
								</Link>
							</li>
							<li className="dropdown-link" >
								<Link href="/ropa/mujer">
									<a>ropa de mujer</a>
								</Link>
							</li>
							<li className="dropdown-link" >
								<Link href="/ropa/niño">
									<a>ropa de niño</a>
								</Link>
							</li>

							<div className="arrow"></div>
						</ul>
					</div>
					</li>
					
					<li className="nav-link">
						<Link href="/servicios">
							<a>servicios</a>
						</Link>
					</li>
					<li className="nav-link">
						<Link href="/contacto">
							<a>contacto</a>
						</Link>
					</li>
					
				</ul>
			</div>
		</div>
	)
};
