import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurAdvantages from './components/OurAdvantages';
import LogoSlider from './components/Slider';
import Offers from './components/Offers';
import TrustedBy from './components/TrustedBy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<LogoSlider />
			<OurAdvantages />
			<TrustedBy />
			<Offers />
			<Contact />
			<Footer />
		</>
	);
}
export default App;
