import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import facebookImg from '../assets/company/facebook.png'
import googleAnalyticsImg from '../assets/company/google-analytics.png'
import googleImg from '../assets/company/google.png'
import instagramImg from '../assets/company/instagram.png'
import linkedinImg from '../assets/company/linkedinn.png';
import tiktokImg from '../assets/company/tiktok.png'
import youtubeImg from '../assets/company/youtube.png'

const LogoSlider = () => {
	const settings = {
		dots: false,
		arrows: false, 
		infinite: true,
		speed: 700,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000, 
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const logos = [
		{ id: 1, src: facebookImg, alt: 'Facebook logo image' },
		{ id: 2, src: googleAnalyticsImg, alt: 'Google analytics logo image' },
		{ id: 3, src: googleImg, alt: 'Google logo image' },
		{ id: 4, src: instagramImg, alt: 'Instagram logo image' },
		{ id: 5, src: linkedinImg, alt: 'Linkedin logo image' },
		{ id: 6, src: tiktokImg, alt: 'Tiktok logo image' },
		{ id: 6, src: youtubeImg, alt: 'Youtube logo image' },
	];

	const sliderRef = useRef < HTMLDivElement > null;

	useEffect(() => {
		const slider = sliderRef.current;
		if (slider) {
			const scroll = () => {
				if (slider.scrollLeft >= slider.scrollWidth / 2) {
					slider.scrollLeft = 0;
				} else {
					slider.scrollLeft += 1;
				}
			};

			const animationId = setInterval(scroll, 30);

			return () => clearInterval(animationId);
		}
	}, []);

	return (
		<div className='w-full py-8 bg-darkGray'>
			<div className='w-full max-w-wrapper mx-auto'>
				<h2 className='text-5xl leading-tight uppercase font-teko font-light text-center text-white'>
					Działamy na <span className='text-orange'>.</span>
				</h2>
				<Slider {...settings}>
					{logos.map((logo) => (
						<div key={logo.id} className='flex justify-center items-center p-4'>
							<img
								src={logo.src}
								alt={logo.alt}
								className='h-24 w-auto object-contain'
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default LogoSlider;
