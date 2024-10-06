import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import slide1Image from '../assets/K1.png';
import slide2Image from '../assets/M1.png';
import slide3Image from '../assets/P2.png';

const slides = [
	{
		title: 'Pozyskujemy klientów',
		subtitle:
			'Nasza strategia marketingowa pozwala na pozyskanie najbardziej wartościowych klientów dla Twojego biznesu.',
		image: slide1Image,
	},
	{
		title: 'Dostarczamy ruch',
		subtitle:
			'Skupiamy się na optymalizacji ruchu i zwiększaniu widoczności Twojej firmy w internecie.',
		image: slide2Image,
	},
	{
		title: 'Generujemy sprzedaż',
		subtitle:
			'Z nami zwiększysz sprzedaż i osiągniesz maksymalne wyniki, dostosowane do Twoich potrzeb.',
		image: slide3Image,
	},
	{
		title: 'Zapewniamy zysk',
		subtitle:
			'Nasze działania przynoszą zyski – zarówno krótkoterminowe, jak i długofalowe.',
		image: slide3Image,
	},
];

const Slider1 = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const nextSlide = useCallback(() => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
	}, []);

	useEffect(() => {
		let intervalId = null;
		if (isAutoPlaying) {
			intervalId = setInterval(nextSlide, 5000);
		}
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [isAutoPlaying, nextSlide]);

	return (
		<div
			className='relative w-full h-[30vh] md:h-[40vh] max-h-[600px] min-h-[400px] overflow-hidden'
			onMouseEnter={() => setIsAutoPlaying(false)}
			onMouseLeave={() => setIsAutoPlaying(true)}
		>
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
						index === currentSlide ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<div className='flex h-full w-full bg-secondary'>
						<div className='w-full flex justify-center items-center h-full relative'>
							<div className='max-w-[1280px] w-full flex h-full'>
								<motion.div
									key={`shape1-${currentSlide}`}
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 0.1 }}
									exit={{ scale: 0, opacity: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									className='absolute top-1/2 right-1/4 w-24 h-24 bg-third rounded-full'
								/>
								<motion.div
									key={`shape2-${currentSlide}`}
									initial={{ x: -50, opacity: 0 }}
									animate={{ x: 0, opacity: 0.1 }}
									exit={{ x: -50, opacity: 0 }}
									transition={{ duration: 0.5, delay: 0.6 }}
									className='absolute bottom-40 left-64 w-20 h-20 bg-four rotate-45'
								/>
								<motion.div
									key={`shape3-${currentSlide}`}
									initial={{ y: 50, opacity: 0 }}
									animate={{ y: 0, opacity: 0.1 }}
									exit={{ y: 50, opacity: 0 }}
									transition={{ duration: 0.5, delay: 0.8 }}
									className='absolute bottom-16 left-1/4 w-0 h-0 border-l-[25px] border-l-transparent border-b-[40px] border-b-third border-r-[25px] border-r-transparent'
								/>
								<motion.div
									key={`shape4-${currentSlide}`}
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 0.2 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.5, delay: 1 }}
									className='absolute top-1/3 left-8 w-12 h-12 bg-four transform rotate-45'
								/>

								<div
									className={`w-full h-full md:w-1/2 flex flex-col justify-center items-center text-gray-800 p-6 md:p-8 lg:p-12 mt-4 relative ${
										index === currentSlide ? 'animate-fade-in-up' : ''
									}`}
									key={currentSlide}
								>
									<motion.div
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 0.1 }}
										transition={{ duration: 0.5 }}
										className='absolute top-0 left-0 w-32 h-32 bg-four rounded-full -translate-x-1/2 -translate-y-1/2'
									/>
									<motion.div
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 0.1 }}
										transition={{ duration: 0.5, delay: 0.2 }}
										className='absolute bottom-0 right-0 w-48 h-48 bg-third rounded-full translate-x-1/4 translate-y-1/4'
									/>
									<h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 md:mt-8 leading-tight tracking-tight relative z-10'>
										{slide.title}
									</h1>
									<p className='text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 tracking-wide leading-relaxed relative z-10'>
										{slide.subtitle}
									</p>
									<motion.button
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: 1.2 }}
										className='px-6 py-3 bg-four text-white rounded-full font-semibold hover:bg-four/90 transition-colors relative z-10'
									>
										Dowiedz się więcej
									</motion.button>
								</div>
								<div className='hidden md:block md:relative md:w-1/2 xl:absolute xl:right-0'>
									<img
										className='object-cover w-full h-full'
										src={slide.image}
										alt='Slide image'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`w-3 h-3 rounded-sm ${
							index === currentSlide ? 'bg-third' : 'bg-white'
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Slider1;
