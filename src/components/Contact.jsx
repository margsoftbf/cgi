import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import teamPhoto from '../assets/photo/MKPAW.webp';

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required('Imię i nazwisko jest wymagane'),
		company: Yup.string(),
		email: Yup.string()
			.required('Email jest wymagany')
			.email('Nieprawidłowy format adresu email'),
		phone: Yup.string()
			.notRequired()
			.matches(/^\d{9,10}$/, {
				message: 'Numer telefonu musi mieć od 9 do 10 cyfr.',
				excludeEmptyString: true,
			}),
		message: Yup.string()
			.required('Wiadomość jest wymagana')
			.max(500, 'Maksymalnie 500 znaków'),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data) => {
		setLoading(true);

		const emailData = {
			to_name: data.firstName,
			from_name: 'Formularz kontaktowy',
			from_email: data.email,
			company: data.company || 'Brak firmy',
			phone: data.phone || 'Brak numeru telefonu',
			message: data.message,
		};

		emailjs
			.send(
				'service_qt1elou',
				'template_59eo0vo',
				emailData,
				'i69yo2aRTZzF1kAHC'
			)
			.then((response) => {
				console.log('Email wysłany!', response.status, response.text);
				toast.success('Wiadomość została wysłana!');
				reset();
			})
			.catch((err) => {
				console.error('Błąd przy wysyłaniu e-maila:', err);
				toast.error(
					'Wystąpił błąd przy wysyłaniu wiadomości. Spróbuj ponownie.'
				);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<section id='contact' className='relative bg-white'>
			<div className='lg:absolute lg:inset-0 lg:left-1/2 m-2 lg:m-12 p-2'>
				<img
					alt='team in the office'
					src={teamPhoto}
					width={500}
					height={400}
					loading='lazy'
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
						<div className='mt-8 text-base leading-7 text-gray-600 flex flex-col gap-4 sm:flex-row items-center justify-between'>
							<dl className='flex flex-col sm:flex-row justify-between w-full gap-4'>
								<div className='flex items-center'>
									<dt className='flex-none'>
										<span className='sr-only'>Telephone</span>
										<svg
											className='h-7 w-6 text-gray-400'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
											/>
										</svg>
									</dt>
									<dd>
										<a className='hover:text-gray-900' href='tel:+48507187641'>
											(+48) 507 187 641
										</a>
									</dd>
								</div>
								<div className='flex items-center'>
									<dt className='flex-none'>
										<span className='sr-only'>Email</span>
										<svg
											className='h-7 w-6 text-gray-400'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
											/>
										</svg>
									</dt>
									<dd>
										<a
											className='hover:text-gray-900'
											href='mailto:piotr@garski.net.pl'
										>
											piotr@garski.net.pl
										</a>
									</dd>
								</div>
							</dl>
						</div>
						<form onSubmit={handleSubmit(onSubmit)} className='mt-16'>
							<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
								<div>
									<label
										htmlFor='name'
										className='block text-left text-sm font-semibold leading-6 text-gray-900'
									>
										Imię i Nazwisko
									</label>
									<div className='mt-2.5'>
										<input
											id='name'
											{...register('firstName')}
											type='text'
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6'
										/>
										<p className='text-red-500 text-sm font-semibold text-left mt-1 ml-1'>
											{errors.firstName?.message}
										</p>
									</div>
								</div>
								<div>
									<div className='flex justify-between text-sm leading-6'>
										<label
											htmlFor='company'
											className='block text-sm text-left font-semibold leading-6 text-gray-900'
										>
											Firma
										</label>
										<p id='company-description' className='text-gray-600'>
											Opcjonalnie
										</p>
									</div>

									<div className='mt-2.5'>
										<input
											id='company'
											{...register('company')}
											type='text'
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
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
											{...register('email')}
											type='email'
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6'
										/>
										<p className='text-red-500 text-sm font-semibold text-left mt-1 ml-1'>
											{errors.email?.message}
										</p>
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
										<p id='phone-description' className='text-gray-600'>
											Opcjonalnie
										</p>
									</div>
									<div className='mt-2.5'>
										<input
											id='phone'
											{...register('phone')}
											type='tel'
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6'
										/>
										<p className='text-red-500 text-sm font-semibold text-left mt-1 ml-1'>
											{errors.phone?.message}
										</p>
									</div>
								</div>
								<div className='sm:col-span-2'>
									<div className='flex justify-between text-sm leading-6'>
										<label htmlFor='description' className='block text-sm font-semibold leading-6 text-gray-900'>
											Jak możemy ci pomóc?
										</label>
										<p id='message-description' className='text-gray-600'>
											Maksymalnie 500 znaków.
										</p>
									</div>
									<div className='mt-2.5'>
										<textarea
                                        id='description'
											{...register('message')}
											rows={4}
											maxLength={500}
											className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6 resize-none'
										/>
										<p className='text-red-500 text-sm font-semibold text-left mt-1 ml-1'>
											{errors.message?.message}
										</p>
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
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
				draggable
				pauseOnFocusLoss
			/>
		</section>
	);
};

export default Contact;
