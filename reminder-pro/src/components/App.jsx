import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder } from '../actions'

class App extends Component{

	constructor(props){
		super(props)
		this.state ={
			text : ''
		}
	}

	addReminder(){
		// console.log('app', this)
		this.props.addReminder(this.state.text)
	}

	renderReminders(){
		console.log(this.props)
	}

	render(){
		return(
			<div className="App">
				<h1 className="title">Reminder Pro</h1>
				<div className="form-inline">
					<div className="form-group">
						<input 
							className="form-control"
							placeholder="I have to..."
							onChange={event => this.setState({'text':event.target.value})}
						/>
					</div>
					{this.renderReminders()}
					<button
						type="button" 
						className="btn btn-info"
						onClick={() => this.addReminder()}
					>Add Reminder</button>
				</div>
			</div>
		)
	}
}

// dispatch function is what calls on the reducers
function mapDispatchToProps(dispatch){
	return bindActionCreators({addReminder}, dispatch)
}

// map state
function mapStateToProps(state){
	return {
		reminders : state
	};
}

export default connect(null, mapDispatchToProps)(App);

// can also be written like so: 
// export default connect(null, { addReminder })(App);
// since we are only binding 1 action creator


