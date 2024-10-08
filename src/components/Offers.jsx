import React from 'react';
import { Search, BarChart2, Users, PieChart } from 'lucide-react';
import teamPhoto from '../assets/photo/M1.png';

export default function Offers() {
	const services = [
		{
			title: 'Pozycjonowanie stron',
			description:
				'Zwiększ widoczność swojej strony w wynikach wyszukiwania Google',
			icon: <Search className='h-6 w-6 text-[#e99614] opacity-100' />,
		},
		{
			title: 'Kampanie Google Ads',
			description: 'Zoptymalizuj swoje kampanie i osiągnij lepsze wyniki',
			icon: <BarChart2 className='h-6 w-6 text-[#e99614]' />,
		},
		{
			title: 'Kampanie Facebook Ads',
			description: 'Skutecznie prowadź kampanie na FB i Instagramie',
			icon: <Users className='h-6 w-6 text-[#e99614]' />,
		},
		{
			title: 'Konfiguracja Google Analytics',
			description: 'Kompleksowa konfiguracja i analiza danych',
			icon: <PieChart className='h-6 w-6 text-[#e99614]' />,
		},
	];

	return (
		<section className='py-16 bg-lightBeige'>
			<div className='max-w-wrapper mx-auto px-4'>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
					<div className='lg:w-2/3 lg:order-2 px-8'>
						<h2 className='text-6xl leading-tight uppercase font-teko font-light text-left'>
							Nasza oferta
							<span className='text-orange'>.</span>
						</h2>
						<p className='text-2xl text-left text-darkBeige font-teko font-light uppercase mb-8'>
							Stosujemy tylko skuteczne i sprawdzone narzędzia marketingu.
							Optymalizujemy każdy aspekt Twojej obecności online, aby
							zmaksymalizować Twój sukces.
						</p>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
							{services.map((service, index) => (
								<div
									key={index}
									className='bg-lightGray rounded-lg overflow-hidden group hover:bg-[#e99614] transition-colors duration-300'
								>
									<div className='p-4 flex flex-col gap-3 md:gap-0 md:flex-row items-center'>
										<div className='relative mr-4 p-2 bg-lightBeige rounded-full transition-colors duration-300'>
											{service.icon}
										</div>
										<div>
											<h3 className='font-semibold mb-2 group-hover:text-black text-center'>
												{service.title}
											</h3>
											<p className='text-sm group-hover:text-darkGray'>
												{service.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='lg:w-1/2 relative mt-2 lg:mt-0 lg:order-1 px-8'>
						<div className='relative overflow-hidden rounded-md'>
							<img
								src={teamPhoto}
								alt='zespół osób'
								className='object-cover w-full h-full'
							/>
							{/* <div className='absolute bottom-4 left-12 bg-[#5c5c5a] text-[#FAF7F0] p-2 rounded-lg transform'>
								<p className='text-sm font-semibold'>
									Nagradzana Agencja
									<br />
									Marketingu Cyfrowego
								</p>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
