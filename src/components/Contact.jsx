import React from 'react';
import teamPhoto from '../assets/photo/MKPAW.png';
const Contact = () => {
	return (
		<div className='relative bg-white'>
			<div className='lg:absolute lg:inset-0 lg:left-1/2 m-2 lg:m-12'>
				<img
					alt=''
					src={teamPhoto}
					className='h-64 w-full bg-gray-50 object-cover sm:h-full lg:absolute lg:h-full'
				/>
			</div>
			<div className='pb-24 pt-4 sm:pb-12 sm:pt-2 lg:mx-auto lg:grid lg:max-w-wrapper lg:grid-cols-2 lg:pt-12'>
				<div className='px-6 lg:px-8'>
					<div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
						<h2 className='text-6xl leading-tight uppercase font-teko font-light text-left text-black'>
							Skontaktuj się z nami
							<span className='text-primary'>.</span>
						</h2>
						<p className='mt-2 text-lg leading-8 text-gray-600 text-left'>
							Skontaktuj się z nami, aby omówić, jak możemy wspólnie rozwijać
							Twój biznes. Niezależnie od wyzwań, przed którymi stoisz, nasze
							doświadczenie i zaangażowanie pomogą znaleźć najlepsze rozwiązania
							dla Twojej firmy.
						</p>
						<form action='#' method='POST' className='mt-16'>
							<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
								<div>
									<label
										htmlFor='first-name'
										className='block text-left text-sm font-semibold leading-6 text-gray-900'
									>
										Imię i Nazwisko
									</label>
									<div className='mt-2.5'>
										<input
											id='first-name'
											name='first-name'
											type='text'
											autoComplete='given-name'
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor='company'
										className='block text-sm text-left font-semibold leading-6 text-gray-900'
									>
										Firma
									</label>
									<div className='mt-2.5'>
										<input
											id='company'
											name='company'
											type='text'
											autoComplete='company'
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
								<div>
									<div>
										<label
											htmlFor='email'
											className='block text-left text-sm font-semibold leading-6 text-gray-900'
										>
											Email
										</label>
										<div className='mt-2.5'>
											<input
												id='email'
												name='email'
												type='email'
												autoComplete='email'
												className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
											/>
										</div>
									</div>
								</div>
								<div>
									<div className='flex justify-between text-sm leading-6'>
										<label
											htmlFor='phone'
											className='block font-semibold text-gray-900'
										>
											Telefon
										</label>
										<p id='phone-description' className='text-gray-400'>
											Opcjonalnie
										</p>
									</div>
									<div className='mt-2.5'>
										<input
											id='phone'
											name='phone'
											type='tel'
											autoComplete='tel'
											aria-describedby='phone-description'
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<div className='flex justify-between text-sm leading-6'>
										<label
											htmlFor='message'
											className='block text-sm font-semibold leading-6 text-gray-900'
										>
											Jak możemy ci pomóc?
										</label>
										<p id='message-description' className='text-gray-400'>
											Maksymalnie 500 znaków.
										</p>
									</div>
									<div className='mt-2.5'>
										<textarea
											id='message'
											name='message'
											rows={4}
											aria-describedby='message-description'
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
											defaultValue={''}
										/>
									</div>
								</div>
							</div>
							<div className='mt-10 flex justify-end border-t border-gray-900/10 pt-8'>
								<button
									type='submit'
									className='rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-lightGray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary duration-300'
								>
									Wyślij wiadomość
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
