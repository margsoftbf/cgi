import React from 'react';
import roundImage from '../assets/shape-1.png';
import slide1Image from '../assets/P2.png';

const OurAdvantages = () => {
	return (
		<section className='relative bg-secondary py-4 md:py-12 overflow-hidden'>
			<div className='max-w-wrapper mx-auto px-6'>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
					<div className='relative w-full lg:w-1/2 flex justify-center lg:justify-end order-2'>
						<div className='relative'>
							<div
								className='w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-lg relative'
								style={{
									backgroundImage: `url(${slide1Image})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<img
									src={roundImage}
									alt='Round Shape'
									className='absolute top-0 opacity-95 -left-40 w-full h-full object-cover z-10'
								/>
								<div className='absolute -top-[60%] left-[20%] w-full h-full bg-white opacity-20 rounded-full'></div>
							</div>
						</div>
					</div>

					<div className='w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0'>
						<h2 className='text-6xl leading-tight uppercase font-teko font-light text-left text-four'>
							Co nas wyróżnia
							<span className='text-third'>.</span>
						</h2>
						<p className='text-four text-left mb-6'>
							Z nami, nigdy nie będziesz musiał martwić się przedłużeniem lub
							odstąpieniem od umowy. Nasze pakiety są zaprojektowane tak, aby
							były optymalne od początku do końca i są wystarczająco elastyczne,
							aby w razie potrzeby móc je w sposób satysfakcjonujący dla każdej
							ze stron zmodyfikować lub zakończyć. Wychodzimy z założenia, że na
							siłę nie da się osiągnąć sukcesu, tylko wtedy, kiedy się wspólnie
							dobrze rozumiemy, osiągniemy i zrealizujemy nasze cele biznesowe.
						</p>
						<div className='space-y-8 font-teko'>
							<div className='flex items-center'>
								<div className='relative w-12 h-12 text-white flex justify-center items-center rounded-full flex-shrink-0 overflow-hidden'>
									<div className='w-full h-full bg-third opacity-25 absolute'></div>
									<span className='text-lg absolute z-20 text-third'>✔</span>
								</div>
								<div className='ml-4 text-left'>
									<h6 className='text-2xl font-medium'>Elastyczne pakiety</h6>
									<p className='text-gray-600 font-lato'>
										Nasze pakiety są wystarczająco elastyczne, aby dostosować je
										do Twoich potrzeb, zapewniając pełną satysfakcję.
									</p>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='relative w-12 h-12 text-white flex justify-center items-center rounded-full flex-shrink-0 overflow-hidden'>
									<div className='w-full h-full bg-third opacity-25 absolute'></div>
									<span className='text-lg absolute z-20 text-third'>✔</span>
								</div>
								<div className='ml-4 text-left'>
									<h6 className='text-2xl font-medium'>
										Brak ukrytych zobowiązań
									</h6>
									<p className='text-gray-600 font-lato'>
										Z nami nie musisz martwić się o ukryte koszty czy
										przedłużanie umów — dbamy o pełną przejrzystość.
									</p>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='relative w-12 h-12 text-white flex justify-center items-center rounded-full flex-shrink-0 overflow-hidden'>
									<div className='w-full h-full bg-third opacity-25 absolute'></div>
									<span className='text-lg absolute z-20 text-third'>✔</span>
								</div>
								<div className='ml-4 text-left'>
									<h6 className='text-2xl font-medium'>Współpraca</h6>
									<p className='text-gray-600 font-lato'>
										Skuteczność osiągamy tylko wtedy, gdy wspólnie się rozumiemy
										i dążymy do realizacji naszych wspólnych celów.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurAdvantages;
