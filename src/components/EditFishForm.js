import React from 'react';

class EditFishForm extends React.Component {
	handleOnChange = event => {
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};

		this.props.updateFish(this.props.index, updatedFish);
	};

	removeFish = () => {
		this.props.deleteFish(this.props.index);
	}

	render() {
		return <div className="fish-edit">
			<input type="text" name="name" onChange={this.handleOnChange} value={this.props.fish.name} placeholder="Name"/>
			<input type="text" name="price" onChange={this.handleOnChange} value={this.props.fish.price} placeholder="Price"/>
				
			<select type="text" onChange={this.handleOnChange} value={this.props.fish.status} name="status">
				<option value="available">Fresh</option>
				<option value="unavailable">Sold Out!</option>
			</select>

			<textarea name="desc" onChange={this.handleOnChange} value={this.props.fish.desc} placeholder="Description"/>
			<input type="text" name="image" onChange={this.handleOnChange} value={this.props.fish.image} placeholder="Image"/>
			<button onClick={this.removeFish} type="submit">Remove Fish</button>
		</div>	
	}
}

export default EditFishForm;