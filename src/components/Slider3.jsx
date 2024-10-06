import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slide1Image from '../assets/K1.png';
import slide2Image from '../assets/M1.png';
import slide3Image from '../assets/P2.png';
import rightCurvedBg from '../assets/right-curved-bg.png';
import rightWhiteCurve from '../assets/right-white-curve.png';
import leftCurveLine from '../assets/left-curve-line.png';

const Slider3 = () => {
	const slides = [
		{
			id: 1,
			image: slide1Image,
			title: 'Pozyskujemy klientów',
			subtitle:
				'Nasza strategia marketingowa pozwala na pozyskanie najbardziej wartościowych klientów dla Twojego biznesu.',
		},
		{
			id: 2,
			image: slide2Image,
			title: 'Dostarczamy ruch',
			subtitle:
				'Skupiamy się na optymalizacji ruchu i zwiększaniu widoczności Twojej firmy w internecie.',
		},
		{
			id: 3,
			image: slide3Image,
			title: 'Generujemy sprzedaż',
			subtitle:
				'Z nami zwiększysz sprzedaż i osiągniesz maksymalne wyniki, dostosowane do Twoich potrzeb.',
		},
		{
			id: 4,
			image: slide3Image,
			title: 'Zapewniamy zysk',
			subtitle:
				'Nasze działania przynoszą zyski – zarówno krótkoterminowe, jak i długofalowe.',
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 8000);

		return () => clearInterval(interval);
	}, [slides.length]);

	const textVariants = {
		initial: { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 30 },
	};

	const variants = {
		initial: { opacity: 0.3, scale: 1 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0.3, scale: 1 },
	};

	const shapeVariants = {
		initial: { opacity: 0, y: -50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
	};

	const rightShapeVariants = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 100 },
	};

	const rightBottomVariants = {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
	};

	return (
		<section className='relative z-10 overflow-hidden'>
			<div className='relative w-full h-[60vh]'>
				<AnimatePresence>
					{slides.map(
						(slide, index) =>
							index === currentSlide && (
								<motion.div
									key={slide.id}
									className='absolute inset-0'
									variants={variants}
									initial='initial'
									animate='animate'
									exit='exit'
									transition={{ duration: 1 }}
								>
									<div
										className='relative w-full h-full bg-cover bg-center '
										style={{ backgroundImage: `url(${slide.image})` }}
									>
										<div className='absolute h-full w-full bg-black/40'></div>
										<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 font-teko'>
											<div className='text-left lg:text-left text-white space-y-4 lg:space-y-8 relative z-10 p-4 mt-20'>
												<motion.h1
													className='text-4xl lg:text-5xl font-bold uppercase z-50'
													variants={textVariants}
													initial='initial'
													animate='animate'
													exit='exit'
													transition={{ duration: 0.8, delay: 0.2 }}
												>
													{slide.title}
												</motion.h1>

												<motion.p
													className='text-lg lg:text-3xl font-semibold uppercase max-w-[600px]'
													variants={textVariants}
													initial='initial'
													animate='animate'
													exit='exit'
													transition={{ duration: 0.8, delay: 0.4 }}
												>
													{slide.subtitle}
												</motion.p>

												<motion.a
													href='about.html'
													className='relative inline-block px-6 py-3 font-semibold text-four uppercase tracking-wider overflow-hidden group bg-third'
													variants={textVariants}
													initial='initial'
													animate='animate'
													exit='exit'
													transition={{ duration: 0.8, delay: 0.6 }}
												>
													<span className='absolute inset-0 bg-four transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out'></span>

													<span className='relative z-10 text-primary'>
														Discover More
													</span>
												</motion.a>
											</div>
										</div>
									</div>
								</motion.div>
							)
					)}
				</AnimatePresence>

				<motion.img
					src={leftCurveLine}
					alt='Left Curve Line'
					className='hidden md:block absolute top-0 left-0 w-32 2xl:w-80 h-[250px] 2xl:h-[550px] z-0'
					variants={shapeVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					key={`leftCurveLine-${currentSlide}`}
					transition={{ duration: 1 }}
				/>

				<motion.img
					src={rightWhiteCurve}
					alt='Right White Curve'
					className='absolute top-0 right-0 w-40 lg:w-80 h-[400px] lg:h-[800px] z-0'
					variants={rightShapeVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					key={`rightWhiteCurve-${currentSlide}`}
					transition={{ duration: 1.5 }}
				/>

				<motion.img
					src={rightCurvedBg}
					alt='Right Curved Bg'
					className='absolute bottom-0 right-0 w-[250px] lg:w-[550px] h-[250px] lg:h-[550px] z-0'
					variants={rightBottomVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					key={`rightCurvedBg-${currentSlide}`}
					transition={{ duration: 2 }}
				/>
			</div>
		</section>
	);
};

export default Slider3;
