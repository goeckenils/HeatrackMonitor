import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TempGraph from './components/screens/TempGraph';
import TableView from './components/screens/TableView';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={TempGraph} />
				<Route exact path="/table" component={TableView} />
			</Switch>
		</Router>
	);
}

export default App;
