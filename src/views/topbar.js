import React, { Component } from 'react';
/* Electron */
const remote = window.require('electron').remote;

class TopBar extends Component {
	render() {
		var isWindows = document.getElementsByTagName('html')[0].classList.contains('win32');
		return (
			<div className="window-title">
				<div className="dots">
				
					<i className={"close fa " + ( isWindows ? 'fa-times' : 'fa-circle' ) } onClick={() => remote.getCurrentWindow().close()}></i>
					<i className={"minimize fa " + ( isWindows ? 'fa-window-minimize' : 'fa-circle' ) } onClick={() => remote.getCurrentWindow().minimize()}></i>
					<i className={ ( remote.getCurrentWindow().isMaximized() ? 'maximized' : 'maximize' ) + " fa " + 
								( isWindows ? ( remote.getCurrentWindow().isMaximized() ? 'fa-window-restore' : 'fa-window-maximize' ) : 'fa-circle' )
						} 
						onClick={() => (remote.getCurrentWindow().isMaximized() ? remote.getCurrentWindow().unmaximize() : remote.getCurrentWindow().maximize())} ></i>
				</div>
				<div className="title">
					<span>Hip Chat</span>
				</div>
				<div className="expand">
					<i className="fa fa-expand" onClick={() => (remote.getCurrentWindow().isFullScreen() ? remote.getCurrentWindow().setFullScreen(false) : remote.getCurrentWindow().setFullScreen(true))}></i>
				</div>
			</div>
		);
	}
}

export default TopBar;