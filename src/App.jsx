import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import OurAdvantages from './components/OurAdvantages';
import Offers from './components/Offers';
function App() {
	return (
		<>
			<Navbar />
			<Slider />
			<About />
			<OurAdvantages />
			<Offers />
		</>
	);
}
export default App;
