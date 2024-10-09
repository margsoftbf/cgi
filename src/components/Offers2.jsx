import React from 'react';
import strategia from '../assets/svg/strategia.svg';
import ads from '../assets/svg/ads.svg';
import pozycjonowanie from '../assets/svg/pozycjonowanie.svg';
import kampanieFacebook from '../assets/svg/kampaniefacebook.svg';
import konfiguracja from '../assets/svg/konfiguracja.svg';
import stronywww from '../assets/svg/stronywww.svg';

const offers = [
	{
		title: 'Pozycjonowanie stron',
		description:
			'Chcesz, aby Twoja strona była widoczna na szczycie wyników wyszukiwania Google? Skorzystaj z naszej oferty pozycjonowania stron! Dzięki indywidualnym strategiom SEO poprawisz widoczność, przyciągniesz więcej klientów i zwiększysz zyski.',
		icon: (
			<img src={pozycjonowanie} alt='' className='w-9 h-9 text-primary ml-1' />
		),
	},
	{
		title: 'Kampanie Google Ads',
		description:
			'Zoptymalizuj swoje kampanie Google Ads i osiągnij lepsze wyniki! Oferujemy kompleksowe prowadzenie kampanii: od tworzenia strategii, przez dobór słów kluczowych, aż po analizę wyników.',
		icon: <img src={ads} alt='' className='w-9 h-9 text-primary ml-1' />,
	},
	{
		title: 'Kampanie Facebook Ads',
		description:
			'Skutecznie prowadzimy kampanie na FB i Instagramie! Od tworzenia kreatywnych treści po precyzyjne targetowanie i szczegółową analizę wyników.',
		icon: (
			<img
				src={kampanieFacebook}
				alt=''
				className='w-8 h-8 text-primary ml-1'
			/>
		),
	},
	{
		title: 'Konfiguracja Google Analytics',
		description:
			'Oferujemy kompleksową konfigurację konta Google Analytics z pełnym wykorzystaniem Google Tag Managera. Śledź kluczowe dane i optymalizuj działania marketingowe.',
		icon: (
			<img src={konfiguracja} alt='' className='w-9 h-9 text-primary ml-1' />
		),
	},
	{
		title: 'Strategia Marki',
		description:
			'Strategia marki opracowana przez nas to kompleksowy plan, który prowadzi Twoją firmę do realizacji kluczowych celów: biznesowych, marketingowych i komunikacyjnych.',
		icon: <img src={strategia} alt='' className='w-8 h-8 text-primary ml-1' />,
	},
	{
		title: 'Strony WWW',
		description:
			'Tworzymy strony WWW, które generują realne zyski! Nasze projekty zachwycają estetyką i spełniają cele biznesowe.',
		icon: <img src={stronywww} alt='' className='w-9 h-9 text-primary ml-1' />,
	},
];

const Offers2 = () => {
	return (
		<div className='relative'>
			<div className='max-w-wrapper mx-auto p-8'>
				<h2 className='text-6xl leading-tight uppercase font-teko font-light text-center text-black'>
					Nasza Oferta
					<span className='text-primary'>.</span>
				</h2>
				<p className='text-darkGray text-center mb-8 lg:mb-12'>
					Stosujemy tylko skuteczne i sprawdzone narzędzia marketingu.
					Optymalizujemy strony, kampanie, media społecznościowe i każde inne
					miejsce, w którym Twój potencjalny Klient ma możliwość, aby poznać i
					ocenić Twoją ofertę i firmę. Analizując dane, na bieżąco dopasowujemy
					prowadzone działania marketingowe, aby dotrzeć w jak najbardziej
					efektowny sposób do Twoich optymalnych klientów. Osiągamy wysokie
					zwroty z inwestycji, optymalizujemy koszty i nigdy nie wykorzystujemy
					twoich środków finansowych ponad miarę. Działamy transparentnie i
					uczciwie.
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{offers.map((offer, index) => (
						<div
							key={index}
							className='relative bg-white rounded-2xl shadow-lg p-6 text-left transition-all duration-300 overflow-hidden group'
						>
							<div className='absolute -bottom-2 -right-12 w-20 h-20 bg-lightGray rounded-full opacity-30 transition-transform transform group-hover:scale-[15] group-hover:duration-500 group-hover:ease-linear z-0'></div>
							<div className='absolute -bottom-10 -right-3 w-20 h-20 bg-lightGray rounded-full opacity-30 transition-transform transform group-hover:scale-[15] group-hover:duration-500 group-hover:ease-linear z-0'></div>
							<div className='relative z-10'>
								<div className='w-16 h-16  relative flex items-center justify-center mb-4'>
									<div className='absolute w-4 h-4 bg-primary top-0 right-1 rounded-full'></div>
									<div className='absolute w-2 h-2 bg-primary bottom-0 left-2 rounded-full'></div>
									<div className='absolute w-full h-full opacity-25 bg-primary rounded-full'></div>
									<div className='text-primary'>{offer.icon}</div>
								</div>
								<h3 className='text-xl font-bold mb-2 text-gray-800'>
									{offer.title}
								</h3>
								<p className='text-gray-600 mb-4'>{offer.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Offers2;
