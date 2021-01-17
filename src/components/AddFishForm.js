import React from 'react';

class AddFishForm extends React.Component {
	render() {
		return (
			<form className="fish-edit">
				<input type="text" name="name" placeholder="Name"/>
				<input type="text" name="name" placeholder="Name"/>
				<input type="text" name="name" placeholder="Name"/>
				<input type="text" name="name" placeholder="Name"/>
				<input type="text" name="name" placeholder="Image"/>
			</form>
		)
	}
}


export default AddFishForm;