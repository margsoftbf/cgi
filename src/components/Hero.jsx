import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';
import sliderMenPhoto from '../assets/photo/K1.webp';
import lineSvg from '../assets/svg/line.svg';
import leftDown from '../assets/svg/leftDown.svg';

const Hero = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<section
			id='about'
			className='relative w-full h-full bg-white overflow-hidden pt-12 md:pt-24'
		>
			<img
				src={lineSvg}
				alt='Triangle shape'
				className='absolute top-0 left-0 w-full h-full z-0 opacity-95'
			/>
			<motion.img
				src={leftDown}
				alt='Triangle shape'
				className='absolute -bottom-[20%]  -left-[20%] w-full h-full z-0 opacity-40'
				initial={{ y: 600, x: 500 }}
				animate={{ y: 0 }}
				transition={{ duration: 1, delay: 0.7 }}
			/>
			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex justify-center h-full md:h-[60vh] items-center z-20'>
				<div className='lg:grid lg:grid-cols-12 lg:gap-8'>
					<div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
						<motion.h1
							className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<span className='block font-teko font-medium text-6xl xl:text-7xl'>
								Zwiększ efektywność
							</span>
							<span className='block text-orange font-teko font-medium text-5xl xl:text-6xl'>
								swojego biznesu.
							</span>
						</motion.h1>
						<motion.p
							className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Nasza platforma oferuje innowacyjne rozwiązania, które pomogą Ci
							zoptymalizować procesy, zwiększyć produktywność i osiągnąć lepsze
							wyniki finansowe.
						</motion.p>
						<motion.div
							className='mt-8 sm:mt-10'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<a
								href='/demo'
								className='relative inline-flex items-center justify-center px-5 py-3 text-base rounded-md text-black font-semibold bg-orange overflow-hidden transition-colors duration-300 ease-out'
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								<span className='relative z-10'>Zamów demo</span>
								<span
									className={`absolute inset-0 bg-darkBeige transform transition-transform duration-500 ease-out ${
										isHovered ? 'translate-x-0' : '-translate-x-full'
									}`}
								></span>
								<ArrowRight className='ml-2 -mr-1 h-5 w-5 relative z-10' />
							</a>
						</motion.div>
					</div>
					<div className='mt-12 sm:mt-16 lg:mt-0 lg:col-span-6'>
						<motion.div
							className='bg-white border sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden shadow-xl'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className='px-4 py-8 sm:px-10'>
								<div className='space-y-6'>
									<div className='flex items-center'>
										<CheckCircle className='h-6 w-6 text-green-500' />
										<p className='ml-3 text-base text-gray-700'>
											Zwiększ produktywność o 40%
										</p>
									</div>
									<div className='flex items-center'>
										<TrendingUp className='h-6 w-6 text-black' />
										<p className='ml-3 text-base text-gray-700'>
											Zmniejsz koszty operacyjne o 25%
										</p>
									</div>
									<div className='flex items-center'>
										<Users className='h-6 w-6 text-blue-500' />
										<p className='ml-3 text-base text-gray-700'>
											Popraw satysfakcję klientów o 60%
										</p>
									</div>
								</div>
							</div>
							<div className='px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10'>
								<p className='text-xs leading-5 text-gray-500'>
									Dołącz do ponad 670 firm, które już nam zaufały.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			<motion.div
				className='hidden lg:block absolute -top-10 -right-28 w-[600px] h-[600px] xl:w-[750px] xl:h-[750px] lg:-right-40 rounded-full bg-darkBeige'
				initial={{ x: 700 }}
				animate={{ x: 0 }}
				transition={{ duration: 1.3, delay: 2 }}
			></motion.div>
			<motion.div
				className='hidden lg:block absolute top-1 -right-[10%] w-[550px] h-[500px] xl:w-[620px] xl:h-[620px] 2xl:w-[650px] 2xl:h-[650px] lg:top-3 xl:-right-[5%] rounded-full overflow-hidden'
				initial={{ x: 700 }}
				animate={{ x: 0 }}
				transition={{ duration: 1.3, delay: 1.5 }}
			>
				<img
					src={sliderMenPhoto}
					alt='Men in office'
					className='w-full h-full object-cover'
				/>
			</motion.div>
		</section>
	);
};

export default Hero;
