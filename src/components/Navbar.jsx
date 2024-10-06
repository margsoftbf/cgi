import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-garski.webp';

const Navbar = ({onSliderChange}) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('header');
			const scrollTop = window.scrollY;

			if (scrollTop > 50) {
				header.classList.add('bg-white', 'shadow-md');
				header.classList.remove('bg-[#f6f8ff]');
			} else {
				header.classList.remove('bg-white', 'shadow-md');
				header.classList.add('bg-[#f6f8ff]');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMobileMenu = ({ onSliderChange }) => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className='bg-primary w-full fixed top-0 z-30 transition-all duration-300 ease-in-out py-2'>
			<nav className='border-gray-200 py-2'>
				<div className='flex flex-wrap justify-between items-center px-6 mx-auto max-w-wrapper'>
					<a href='index.html' className='flex items-center z-50'>
						<img src={logo} className='w-[90px]' alt='Logo' />
					</a>

					<div className='flex items-center lg:order-2'>
						<button
							type='button'
							className='hidden lg:inline-block border border-four text-four font-bold py-1 px-4 rounded transition-all duration-300 ease-in-out hover:bg-four hover:text-white hover:shadow-lg'
						>
							Bezpłatna wycena
						</button>

						<button
							type='button'
							id='dropdown-toggle'
							className='inline-flex items-center border p-2 text-lg text-gray-500 rounded-lg md:hidden z-50'
							aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
							onClick={toggleMobileMenu}
						>
							<span className='sr-only'>Open main menu</span>
							{isMobileMenuOpen ? (
								<X className='w-6 h-6' />
							) : (
								<Menu className='w-6 h-6' />
							)}
						</button>
					</div>

					<div
						className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden ${
							isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
						}`}
					>
						<ul className='flex flex-col justify-center items-center h-full space-y-8 uppercase text-xl'>
							<li>
								<a
									href='#home'
									className='text-four hover:text-third transition-all duration-300'
									onClick={toggleMobileMenu}
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='text-four hover:text-third transition-all duration-300'
									onClick={toggleMobileMenu}
								>
									O firmie
								</a>
							</li>
							<li>
								<a
									href='#experience'
									className='text-four hover:text-third transition-all duration-300'
									onClick={toggleMobileMenu}
								>
									Oferta
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-four hover:text-third transition-all duration-300'
									onClick={toggleMobileMenu}
								>
									Kontakt
								</a>
							</li>
						</ul>
					</div>

					<div className='hidden md:flex lg:items-center lg:space-x-8 lg:order-1'>
						<ul className='flex space-x-10 uppercase text-[14px] font-semibold tracking-wider'>
							<li>
								<a
									onClick={() => onSliderChange('slider1')}
									href='#home'
									className='text-four hover:text-third transition-all duration-300'
								>
									Home
								</a>
							</li>
							<li>
								<a
									onClick={() => onSliderChange('slider2')}
									href='#about'
									className='text-four hover:text-third transition-all duration-300'
								>
									O firmie
								</a>
							</li>
							<li>
								<a
									onClick={() => onSliderChange('slider3')}
									href='#experience'
									className='text-four hover:text-third transition-all duration-300'
								>
									Oferta
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-four hover:text-third transition-all duration-300'
								>
									Kontakt
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
