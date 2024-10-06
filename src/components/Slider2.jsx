import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import slide1Image from '../assets/K.png';
import slide2Image from '../assets/A.png';
import slide3Image from '../assets/P.png';

const Slider2 = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const slides = [
		{
			title: 'Pozyskujemy klientów',
			subtitle: 'z innowacyjną strategią marketingową!',
			image: slide1Image,
		},
		{
			title: 'Dostarczamy ruch',
			subtitle: 'dzięki efektywnej reklamie',
			image: slide2Image,
		},
		{
			title: 'Generujemy sprzedaż',
			subtitle: 'dla każdej firmy',
			image: slide3Image,
		},
		{
			title: 'Zapewniamy zysk',
			subtitle: 'dla każdej firmy',
			image: slide1Image,
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
		<section className='py-6 pt-[90px] relative w-full h-full md:h-[40vh] max-h-[600px] min-h-[400px] flex flex-col sm:flex-row sm:order-1 items-center justify-between max-w-wrapper m-auto'>
			<div className='w-full lg:w-1/2 px-8 lg:px-16 flex flex-col justify-center gap-0 md:gap-4 h-full items-center order-2'>
				<motion.div
					key={activeSlide}
					variants={slideVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: 0.6 }}
				>
					<h1 className='text-third text-2xl md:text-4xl font-semibold mb-4'>
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
					className='text-md lg:text-xl text-gray-600 mb-8 tracking-wider'
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

				<motion.button
					key={`button-${activeSlide}`}
					className='px-6 py-3 bg-four text-white rounded-md font-semibold hover:bg-four/90 transition-colors relative z-10'
					variants={slideVariants}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					Dowiedz się więcej
				</motion.button>
			</div>

			<div className='order-1 sm:order-2 w-full lg:w-1/2 h-full relative p-2 flex items-center justify-center'>
				<div className='order-1 md:order-2 w-full h-48 lg:h-full relative flex items-center justify-center overflow-hidden '>
					<motion.div
						key={`shape-background-${activeSlide}`}
						className='absolute bg-secondary rounded-md w-full h-48 lg:h-full p-4'
						variants={imageVariants}
						initial='initial'
						animate='animate'
						exit='exit'
						transition={{ duration: 1.2 }}
					>
						<motion.img
							key={activeSlide}
							src={slides[activeSlide].image}
							alt='Slide'
							className='w-full h-full rounded-lg object-cover '
							variants={imageVariants}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{ duration: 1.8 }}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Slider2;
