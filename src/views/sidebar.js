import React, { Component } from 'react';

class SideBar extends Component {
	render() {
		return (
			<div className="menu-list">
				<ul className="">
					<li className="item active">
						<a href="#">
							<i className="fa fa-comments-o"></i>
							<span>Chat</span>
						</a>
					</li>
					<li className="item">
						<a href="#">
							<i className="fa fa-film"></i>
							<span>Movies</span>
						</a>
					</li>
					<li className="item">
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