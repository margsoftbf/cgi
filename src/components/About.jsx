import React from 'react';
import aboutWomenPhoto from '../assets/photo/A1.webp';
import aboutMenPhoto from '../assets/photo/W1.webp';

const About = () => {
	return (
		<section className='relative bg-lightBeige py-16 overflow-hidden'>
			<div className='max-w-wrapper mx-auto'>
				<div className='flex flex-col lg:flex-row justify-center'>
					<div className='relative w-full xl:w-1/2 lg:w-full px-8 ml-2 sm:ml-32 lg:ml-2'>
						<div className='absolute left-0 top-0 h-56 w-4 bg-lightGray rounded-t-full rounded-b-full'></div>
						<div className='relative z-10 overflow-hidden'>
							<img
								src={aboutWomenPhoto}
								alt='Women stay in office'
								className='w-[470px] h-[516px] object-cover rounded-lg shadow-lg'
							/>
							<div className='absolute inset-0 bg-black opacity-10 rounded-lg w-[470px] h-full '></div>
						</div>
						<div className='absolute left-0 bottom-[-50px] z-10'>
							<img
								src={aboutMenPhoto}
								alt='Men stay in office'
								className='w-[280px] lg:w[420] h-[295px] object-cover rounded-lg shadow-lg'
							/>
							<div className='absolute inset-0 bg-black opacity-10 rounded-lg w-[280px] lg:w[420] h-full '></div>
						</div>
					</div>

					<div className='w-full xl:w-1/2 lg:w-full px-4 flex flex-col justify-center gap-3 mt-20 lg:mt-0'>
						<div className='mb-4'>
							<h2 className='text-6xl leading-tight uppercase font-teko font-light text-left'>
								O nas
								<span className='text-orange'>.</span>
							</h2>
							<p className='text-2xl text-left text-darkBeige font-teko font-light uppercase'>
								Od 2002 roku świadczymy usługi dla ponad 100 firm, realizując
								670 projektów.
							</p>
						</div>

						<p className='text-darkGray text-left mb-4'>
							Nasze kampanie reklamowe wygenerowały 108 120 000 wyświetleń i
							pozyskały 15 768 000 potencjalnych klientów. Dzięki inwestycjom o
							wartości 14 320 000 zł, przychody wyniosły 379 480 000 zł, co daje
							średni ROI na poziomie +2650%.
						</p>

						<div className='flex flex-row items-center space-x-5 relative'>
							<ul className='list-none space-y-2 w-full md:w-[75%] text-left'>
								<li className='flex items-start'>
									<span className='text-orange mr-2'>✔</span>
									<span className='max-w-full break-words'>
										Świadczymy usługi marketingu cyfrowego, obejmujące doradztwo
										i zarządzanie.
									</span>
								</li>
								<li className='flex items-start'>
									<span className='text-orange mr-2'>✔</span>
									<span className='max-w-full break-words'>
										Zajmujemy się różnymi taktykami i strategiami marketingu
										internetowego.
									</span>
								</li>
								<li className='flex items-start'>
									<span className='text-orange mr-2'>✔</span>
									<span className='max-w-full break-words'>
										Pomagamy w kampaniach marketingowych w mediach
										społecznościowych.
									</span>
								</li>
							</ul>

							<div className='hidden relative md:flex items-center justify-center h-full'>
								<div className='w-1.5 h-full bg-lightGray rounded-t-full rounded-b-full'></div>
							</div>

							<div className='hidden md:flex items-center justify-center bg-darkGray text-white rounded-full w-28 h-28 ml-4 lg:ml-6 flex-shrink-0'>
								<div className='text-center font-teko font-semibold'>
									<span className='text-lg block'>Since</span>
									<span className='text-2xl'>2002</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
