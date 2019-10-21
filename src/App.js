import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TempGraph from './components/screens/TempGraph';
import TableView from './components/screens/TableView';
import './App.css';
import { GlobalReactTableStyle } from './components/interface/Table';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path="/" component={TempGraph} />
					<Route exact path="/table" component={TableView} />
				</Switch>
			</Router>
			<GlobalReactTableStyle />
		</Fragment>
	);
}

export default App;
