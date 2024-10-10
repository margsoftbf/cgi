import React from 'react';
import villaVerde from '../assets/trustedby/villa-verde.webp';
import verdeMontana from '../assets/trustedby/verde-montana.webp';
import inepan from '../assets/trustedby/inepan_logo.webp';
import moreSolutions from '../assets/trustedby/more-solutions.webp';

const TrustedBy = () => {
	const companies = [
		{ id: 1, src: villaVerde, alt: 'Villa Verde Hotel logo' },
		{ id: 2, src: verdeMontana, alt: 'Verde Montana Hotel logo' },
		{ id: 3, src: inepan, alt: 'Inepan instytuk nauk ekonomicznych logo' },
		{ id: 4, src: moreSolutions, alt: 'More solutions logo' },
	];

	return (
		<div className='bg-lightGray py-12'>
			<div className='max-w-wrapper mx-auto px-4 text-center'>
				<h2 className='text-5xl leading-tight uppercase font-teko font-light text-center text-black'>
					Zaufali nam <span className='text-white'>.</span>
				</h2>
				<p className='text-black mb-6 text-center'>
					Nasze usługi są wykorzystywane przez wiele wiodących firm na rynku,
					które zaufały naszej wiedzy i doświadczeniu. Dzięki naszemu
					innowacyjnemu podejściu i dostosowanym strategiom, pomagamy naszym
					partnerom rozwijać się i osiągać lepsze wyniki. Współpracujemy z
					firmami z różnych branż, zapewniając kompleksowe wsparcie i najlepsze
					rozwiązania dla ich potrzeb. Zaufanie, które zdobyliśmy, jest
					rezultatem naszej konsekwentnej pracy na rzecz dostarczania wysokiej
					jakości usług.
				</p>
				<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center'>
					{companies.map((company) => (
						<div
							key={company.id}
							className='flex justify-center items-center p-4 transition-transform transform hover:scale-105 bg-white rounded-lg group h-20'
						>
							<img
								src={company.src}
								alt={company.alt}
								loading="lazy"
								className='h-14 object-contain grayscale group-hover:grayscale-0 transition-all duration-300'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrustedBy;
