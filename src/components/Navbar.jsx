import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-garski-cig.webp';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
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

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className='bg-lightBeige w-full fixed top-0 z-30 transition-all duration-300 ease-in-out py-2'>
			<nav className='border-gray-200 py-2'>
				<div className='flex flex-wrap justify-between items-center px-6 mx-auto max-w-wrapper'>
					<a href='index.html' className='flex items-center z-50'>
						<img src={logo} className='w-40' alt='Logo' />
					</a>

					<div className='flex items-center lg:order-2'>
						<button
							className='hidden lg:block relative px-4 py-1 text-base font-semibold bg-orange text-white rounded overflow-hidden transition-colors duration-300 ease-out hover:text-white'
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<span className='relative z-10'>Bezpłatna wycena</span>
							<span
								className={`absolute inset-0 bg-darkBeige transform transition-transform duration-500 ease-out ${
									isHovered ? 'translate-x-0' : '-translate-x-full'
								}`}
							></span>
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
									className='text-darkGray hover:text-orange transition-all duration-300'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='text-darkGray hover:text-orange transition-all duration-300'
								>
									O firmie
								</a>
							</li>
							<li>
								<a
									href='#experience'
									className='text-darkGray hover:text-orange transition-all duration-300'
								>
									Oferta
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-darkGray hover:text-orange transition-all duration-300'
								>
									Kontakt
								</a>
							</li>
						</ul>
					</div>

					<div className='hidden md:flex lg:items-center lg:space-x-8 lg:order-1'>
						<ul className='flex space-x-10 uppercase text-base font-semibold tracking-wider'>
							<li>
								<a
									href='#home'
									className='text-darkGray hover:text-orange transition-all duration-300 relative before:content-[""] before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:bg-orange before:transition-all before:duration-300 hover:before:w-full'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='text-darkGray hover:text-orange transition-all duration-300 relative before:content-[""] before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:bg-orange before:transition-all before:duration-300 hover:before:w-full'
								>
									O firmie
								</a>
							</li>
							<li>
								<a
									href='#experience'
									className='text-darkGray hover:text-orange transition-all duration-300 relative before:content-[""] before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:bg-orange before:transition-all before:duration-300 hover:before:w-full'
								>
									Oferta
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-darkGray hover:text-orange transition-all duration-300 relative before:content-[""] before:absolute before:w-0 before:h-[2px] before:-bottom-1 before:left-0 before:bg-orange before:transition-all before:duration-300 hover:before:w-full'
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
