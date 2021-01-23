import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const params = this.props.match.params;
		const localStorageRef = localStorage.getItem(params.storeId);
		if(localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}

		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	};

	componentDidUpdate() {
		const params = this.props.match.params;
		const orderAsString = JSON.stringify(this.state.order);

		localStorage.setItem(params.storeId, orderAsString);
	};

	componentWillUnmount() {
		
		base.removeBinding();
	};

	addFish = fish => {
		const fishes = {...this.state.fishes};

		fishes[`fish${Date.now()}`] = fish;

		this.setState({
			fishes: fishes
		});
	};

	updateFish = (key, updatedFish) => {
		const fishes = {...this.state.fishes};

		fishes[key] = updatedFish;

		this.setState({
			fishes: fishes
		});
	};

	deleteFish = (key) => {
		const fishes = {...this.state.fishes};

		fishes[key] = null;

		this.setState({
			fishes: fishes
		});
	};

	addToOrder = (key) => {
		const order = {...this.state.order};

		if (key in order) {
			order[key] += 1;
		} else {
			order[key] = 1;
		} 

		this.setState({
			order: order
		});
	};

	deleteFromOrder = (key) => {
		const order = {...this.state.order};

		delete order[key];

		this.setState({
			order: order
		});
	}

	loadSampleFishes = () => {
		this.setState({
			fishes: sampleFishes
		});
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
					<ul className="fishes">
						{ Object.keys(this.state.fishes).map(key => 
							<Fish 
							key={key} 
							index={key}
							details={this.state.fishes[key]} 
							addToOrder={this.addToOrder}
						/> 
						)}
					</ul>
				</div>

			<Order 
				fishes={this.state.fishes} 
				order={this.state.order}
				deleteFromOrder={this.deleteFromOrder}
			/>
			<Inventory 
				addFish={this.addFish} 
				updateFish={this.updateFish}
				deleteFish={this.deleteFish}
				loadSampleFishes={this.loadSampleFishes}
				fishes={this.state.fishes}
			/>	
			</div>
		)
	}
}

export default App;