import './UserInputs.css'
import APIResponse from './APIResponse.js'

//when submit is pressed: read text fields, append them, then send to api and return results
//maybe start with this project as an example in the text fields

function UserInputs() {
	return(
		<div className="UserInputs">
			<div className="inputItem">
				<textarea></textarea>
			</div>
			<div className="inputItem">
				<textarea></textarea>
			</div>
			<div className="inputItem">
				<textarea></textarea>
			</div>
			<div>
				<button>Submit</button>
			</div>
			<label>names:</label>
			<APIResponse/>
		</div>
	);
}

export default UserInputs;