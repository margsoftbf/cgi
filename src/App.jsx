import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurAdvantages from './components/OurAdvantages';
import Offers from './components/Offers';
import LogoSlider from './components/Slider';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<OurAdvantages />
			<LogoSlider />
			<Offers />
		</>
	);
}
export default App;
