import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import Test from './Components/Test'

class App extends Component {
	render() {
		return (
			<div>
				{/* You can delete me, starting from here! */}
				<section className="hero is-info">
					<div className="hero-body is-size-2 has-text-centered">Cryptocurrency Tracker</div>
				</section>
				<section className="section">
					<div className="container">
						<Test/>
					</div>

				</section>
				{/* End of instructions */}
			</div>
		)
	}
}

export default App
