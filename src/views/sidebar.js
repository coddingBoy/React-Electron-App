import React, { Component } from 'react';

class SideBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			plugins: {},
		};
	}

	componentDidMount() {

		var myPlugins = new XMLHttpRequest();
		
		myPlugins.overrideMimeType("application/json");

		myPlugins.onreadystatechange = function() {
			if (myPlugins.readyState === XMLHttpRequest.DONE) {

				this.setState({
					plugins: JSON.parse(myPlugins.responseText)
				});

			}
		}.bind(this);
		myPlugins.open("get", "../plugins/plugins.json", true);
		myPlugins.send(null);
	}

	render() {
		console.log(Object.keys(this.state.plugins).length);

		if ( Object.keys(this.state.plugins).length > 0 ) {
			var listItems = this.state.plugins.active.map(function(item) {
				var info = item.config;
				return (
					<li className="item" key={item.name}>
						<a href="#">
							<i className={info.icon} style={{ color: info.color }} ></i>
							<span>{info.title}</span>
						</a>
					</li>
				)
			});
		}

		return (
			<div className="menu-list">
				<ul className="">
					{listItems}
					<li className="item active">
						<a href="#">
							<i className="fa fa-television"></i>
							<span>Shows</span>
						</a>
					</li>
					<li className="item">
						<a href="#">
							<i className="fa fa-futbol-o"></i>
							<span>Anime</span>
						</a>
					</li>
					<li className="item">
						<a href="#">
							<i className="fa fa-music"></i>
							<span>Music</span>
						</a>
					</li>
				</ul>
				<div className="my-account">
					<a href="#" className="settings">
						<i className="fa fa-cog"></i>
					</a>
				</div>
			</div>
		);
	}
}

export default SideBar;