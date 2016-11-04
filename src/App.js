import React, { Component } from 'react';
import TopBar 	 from './views/topbar.js';
import Sidebar 	 from './views/sidebar.js';
//import GroupChat from './views/group-chat.js';
import UserChat  from './views/user-chat.js';

class App extends Component {

	render() {
		return (
			<div className="window-wrapper">
				<TopBar />
				<div className="window-area user-chat">
					<Sidebar />
					<div className="package-container">
						<UserChat />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

/* <GroupChat /> */