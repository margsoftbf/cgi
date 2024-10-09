import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';
import sliderMenPhoto from '../assets/photo/K1.webp';
import lineSvg from '../assets/svg/line.svg';

const Hero = () => {
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
			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex justify-center h-full md:h-[50vh] items-center z-20'>
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
							<span className='block text-primary font-teko font-medium text-5xl xl:text-6xl'>
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
										<CheckCircle className='h-6 w-6 text-primary' />
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
										<Users className='h-6 w-6 text-darkBeige' />
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
				className='hidden lg:block absolute -top-10 -right-28 w-[600px] h-[600px] xl:w-[650px] xl:h-[650px] lg:-right-40 rounded-full bg-lightGray'
				initial={{ x: 700 }}
				animate={{ x: 0 }}
				transition={{ duration: 1.3, delay: 1.7 }}
			></motion.div>
			<motion.div
				className='hidden lg:block absolute top-1 -right-[10%] w-[550px] h-[500px] xl:w-[620px] xl:h-[620px] 2xl:w-[550px] 2xl:h-[550px] lg:top-3 xl:-right-[5%] rounded-full overflow-hidden'
				initial={{ x: 700 }}
				animate={{ x: 0 }}
				transition={{ duration: 1.3, delay: 1.2 }}
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
