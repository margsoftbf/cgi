import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurAdvantages from './components/OurAdvantages';
import Offers from './components/Offers';
import LogoSlider from './components/Slider';
import Offers2 from './components/Offers2';
import TrustedBy from './components/trustedby';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<LogoSlider />
			<OurAdvantages />
			<TrustedBy />
			<Offers2 />
			<Offers />
		</>
	);
}
export default App;
