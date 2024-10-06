import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider1 from './components/Slider1';
import Slider2 from './components/Slider2';
import Slider3 from './components/Slider3';
import Slider4 from './components/Slider4';
import About from './components/About';
function App() {
	const [activeSlider, setActiveSlider] = useState('slider1');

	const handleSliderChange = (slider) => {
		setActiveSlider(slider);
	};
	return (
		<>
			<Navbar onSliderChange={handleSliderChange} />
			{activeSlider === 'slider1' && <Slider1 />}
			{activeSlider === 'slider2' && <Slider2 />}
			{activeSlider === 'slider3' && <Slider3 />}
			{activeSlider === 'slider4' && <Slider4 />}
			<About />
		</>
	);
}
export default App;
