import React from 'react';
import { Search, BarChart2, Users, PieChart } from 'lucide-react';
import teamPhoto from '../assets/photo/M1.png';

export default function Offers() {
	const services = [
		{
			title: 'Pozycjonowanie stron',
			description:
				'Zwiększ widoczność swojej strony w wynikach wyszukiwania Google',
			icon: <Search className='h-6 w-6 text-primary opacity-100' />,
		},
		{
			title: 'Kampanie Google Ads',
			description: 'Zoptymalizuj swoje kampanie i osiągnij lepsze wyniki',
			icon: <BarChart2 className='h-6 w-6 text-primary' />,
		},
		{
			title: 'Kampanie Facebook Ads',
			description: 'Skutecznie prowadź kampanie na FB i Instagramie',
			icon: <Users className='h-6 w-6 text-primary' />,
		},
		{
			title: 'Konfiguracja Google Analytics',
			description: 'Kompleksowa konfiguracja i analiza danych',
			icon: <PieChart className='h-6 w-6 text-primary' />,
		},
	];

	return (
		<section className='py-16 bg-lightGray'>
			<div className='max-w-wrapper mx-auto px-4'>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
					<div className='lg:w-2/3 lg:order-2 px-8'>
						<h2 className='text-6xl leading-tight uppercase font-teko font-light text-left'>
							Nasza oferta
							<span className='text-primary'>.</span>
						</h2>
						<p className='text-2xl text-left text-darkGray font-teko font-light uppercase mb-8'>
							Stosujemy tylko skuteczne i sprawdzone narzędzia marketingu.
							Optymalizujemy każdy aspekt Twojej obecności online, aby
							zmaksymalizować Twój sukces.
						</p>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
							{services.map((service, index) => (
								<div
									key={index}
									className='bg-darkGray rounded-lg overflow-hidden group hover:bg-primary transition-colors duration-300'
								>
									<div className='p-4 flex flex-col gap-3 md:gap-0 lg:flex-row items-center'>
										<div className='relative lg:mr-4  mb-2 lg:mb-0 p-2 bg-lightBeige rounded-full transition-colors duration-300'>
											{service.icon}
										</div>
										<div>
											<h3 className='font-semibold mb-2 group-hover:text-black text-center'>
												{service.title}
											</h3>
											<p className='text-sm '>{service.description}</p>
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
