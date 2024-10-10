
export default function Footer() {
	return (
		<footer className=''>
			<div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
				<div className='mt-8 md:order-1 md:mt-0'>
					<div className='text-center md:text-left'>
						<p className='text-sm leading-5'>PRI GAAP Piotr Garski</p>
						<p className='text-sm leading-5'>ul. Moniuszki 46, 42-310 Żarki</p>
						<p className='text-sm leading-5'>
							NIP: 9541360186 — REGON: 277826484
						</p>
					</div>
					<p className='mt-2 text-center text-xs leading-5 text-gray-600 md:text-left'>
						&copy; 2024 Wszelkie prawa zastrzeżone.
					</p>
				</div>
			</div>
		</footer>
	);
}
