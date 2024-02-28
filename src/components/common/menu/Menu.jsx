import './Menu.scss';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobalData } from '../../../hooks/useGlobalContext';

function Menu() {
	const { MenuOpen, setMenuOpen } = useGlobalData();
	return (
		<AnimatePresence>
			{MenuOpen && (
				<motion.aside
					className='menu'
					initial={{ x: '-100%' }}
					animate={{ x: '0%' }}
					exit={{ x: '-100%' }}
					transition={{ duration: 0.5 }}
					onClick={() => setMenuOpen(false)}
				>
					<h1>
						<Link to='/'>LOGO</Link>
					</h1>

					<ul>
						<li>
							<NavLink to='/department' activeClassName='active'>
								Department
							</NavLink>
						</li>
						<li>
							<NavLink to='/community' activeClassName='active'>
								Community
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' activeClassName='active'>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' activeClassName='active'>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink to='/members' activeClassName='active'>
								Members
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' activeClassName='active'>
								Contact
							</NavLink>
						</li>
					</ul>
				</motion.aside>
			)}
		</AnimatePresence>
	);
}

export default Menu;
