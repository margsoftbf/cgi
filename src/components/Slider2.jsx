import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import dostarczamy from '../assets/dostarczamy.png';
import pozyskujemy from '../assets/pozyskujemy.png';
import generujemy from '../assets/generujemy.png';
import zapewniamy from '../assets/zapewniamy.png';

const Slider2 = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isTypewriterDone, setIsTypewriterDone] = useState(false);

	const slides = [
		{
			title: 'Pozyskujemy klientów',
			subtitle: 'z innowacyjną strategią marketingową!',
			image: pozyskujemy,
		},
		{
			title: 'Dostarczamy ruch',
			subtitle: 'dzięki efektywnej reklamie',
			image: dostarczamy,
		},
		{
			title: 'Generujemy sprzedaż',
			subtitle: 'dla każdej firmy',
			image: generujemy,
		},
		{
			title: 'Zapewniamy zysk',
			subtitle: 'dla każdej firmy',
			image: zapewniamy,
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			handleNextSlide();
		}, 5800);

		return () => clearInterval(interval);
	}, []);

	const handleNextSlide = () => {
		setActiveSlide((prev) => (prev + 1) % slides.length);
	};

	const handlePrevSlide = () => {
		setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	const slideVariants = {
		initial: { opacity: 0, x: -100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 100 },
	};

	const imageVariants = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -100 },
	};

	const buttonVariants = {
		initial: { opacity: 0, y: 30 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 30 },
	};

	return (
		<section className='pt-[90px] relative w-full h-[30vh] md:h-[40vh] max-h-[600px] min-h-[400px] flex items-center justify-between max-w-wrapper m-auto'>
			<div className='w-full lg:w-1/2 px-8 lg:px-16 flex flex-col justify-center gap-4 h-full items-start text-left'>
				<motion.div
					key={activeSlide}
					variants={slideVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-third text-4xl lg:text-5xl font-semibold mb-4'>
						<Typewriter
							options={{
								strings: slides[activeSlide].title,
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
				</motion.div>

				<motion.p
					className='text-lg lg:text-xl text-gray-600 mb-8 tracking-wider'
					key={`subtitle-${activeSlide}`}
					variants={slideVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Nasza strategia marketingowa pozwala na pozyskanie najbardziej
					wartościowych klientów dla Twojego biznesu.
				</motion.p>
				<motion.div
					className='flex items-center space-x-4'
					variants={buttonVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<button className='px-6 py-3 bg-four text-white rounded-md font-semibold hover:bg-four/90 transition-colors relative z-10'>
						Dowiedz się więcej
					</button>
				</motion.div>
			</div>

			<div className='w-full lg:w-1/2 h-full relative p-8'>
				<motion.img
					key={activeSlide}
					src={slides[activeSlide].image}
					alt='Slide'
					className='w-full h-full object-contain'
					variants={imageVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: 1.8 }}
				/>
			</div>
		</section>
	);
};

export default Slider2;
