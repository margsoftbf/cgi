import React from 'react';
import { motion } from 'framer-motion';
import slide1Image from '../assets/K1.png';
import roundShape1 from '../assets/b-3-shape.png';
import bgShape1 from '../assets/banner-bg-shape-3.png';

const Slider4 = () => {
	return (
		<section
			id='about'
			className='relative w-full h-[70vh] bg-white overflow-hidden'
		>
			<div
				className='absolute opacity-[5%] top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat z-0'
				style={{ backgroundImage: `url(${bgShape1})` }}
			></div>
			<div className='absolute inset-0 flex justify-start items-center z-10 bg-white bg-opacity-10'>
				<div className='flex flex-col items-center mt-20 text-left text-black space-y-4 p-6 font-teko w-full max-w-[100%] lg:max-w-[50%] 2xl:max-w-wrapper 2xl:m-auto lg:items-start pl-10 lg:pl-16'>
					<motion.h1
						className='text-center lg:text-left text-4xl sm:text-6xl font-bold uppercase'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						Pozyskujemy klientów hasło nasze
					</motion.h1>
					<motion.p
						className='text-xl text-center lg:text-left md:text-2xl font-semibold uppercase tracking-wider'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Nasza strategia marketingowa pozwala na pozyskanie najbardziej
						wartościowych klientów dla Twojego biznesu.
					</motion.p>
					<motion.a
						href='#about'
						className='relative inline-block px-6 py-3 font-semibold text-four uppercase tracking-wider overflow-hidden group bg-four group:hover:text-four'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<span className='absolute inset-0 bg-primary transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out'></span>
						<span className='relative z-10 text-primary group-hover:text-four tracking-wider transition-colors duration-300 ease-in-out'>
							Discover More
						</span>
					</motion.a>
				</div>
			</div>

			<motion.div
				className='hidden lg:block absolute -top-10 -right-28 w-[600px] h-[600px] xl:w-[750px] xl:h-[750px] xl:-right-32 rounded-full bg-four'
				initial={{ x: 700 }}
				animate={{ x: 0 }}
				transition={{ duration: 1.3, delay: 2 }}
			></motion.div>
			<motion.div
				className='hidden lg:block absolute top-1 -right-[10%] w-[550px] h-[500px] xl:w-[650px] xl:h-[650px] lg:top-3 xl:-right-[5%] rounded-full overflow-hidden'
				initial={{ x: 700 }}
				animate={{ x: 0 }}
				transition={{ duration: 1.3, delay: 1.5 }}
			>
				<img
					src={slide1Image}
					alt='Rounded Image'
					className='w-full h-full object-cover'
				/>
			</motion.div>

			<motion.div
				className='absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-four/60'
				initial={{ y: 500 }}
				animate={{ y: 0 }}
				transition={{ duration: 1, delay: 0.7 }}
			></motion.div>
			<motion.div
				className='hidden lg:block absolute -bottom-32 right-[20%] lg:w-60 lg:h-60 xl:w-80 xl:h-80 xl:-bottom-[25%] xl:right-[25%] 2xl:-bottom-[15%] 2xl:right-96 z-20'
				style={{
					backgroundImage: `url(${roundShape1})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					borderRadius: '50%',
				}}
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, delay: 2.5 }}
			></motion.div>
		</section>
	);
};

export default Slider4;
