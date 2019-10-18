import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TempGraph from './components/screens/TempGraph';
import './App.css';

function App() {
	return (
		<Router>
			<div>
				<TempGraph />
			</div>
		</Router>
	);
}

export default App;
