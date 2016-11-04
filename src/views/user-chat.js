import React, { Component } from 'react';

class UserChat extends Component {
	render() {
		return (
			<div className="chat-area">
				<div className="chat-header clearfix">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

					<div className="chat-about">
						<div className="chat-with">Chat with Vincent Porter</div>
						<div className="chat-num-messages">already 1 902 messages</div>
					</div>
					<i className="fa fa-cog"></i>
				</div>
				<div className="chat-list chat">

					<div className="chat-history">
						<ul>
							<li className="clearfix">
								<div className="message-data align-right">
									<span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
									<span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
									
								</div>
								<div className="message other-message float-right">
									Hi Vincent, how are you? How is the project coming along?
								</div>
							</li>
							
							<li>
								<div className="message-data">
									<span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
									<span className="message-data-time">10:12 AM, Today</span>
								</div>
								<div className="message my-message">
									Are we meeting today? Project has been already finished and I have results to show you.
								</div>
							</li>
							
							<li className="clearfix">
								<div className="message-data align-right">
									<span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
									<span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
									
								</div>
								<div className="message other-message float-right">
									Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
								</div>
							</li>
							
							<li>
								<div className="message-data">
									<span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
									<span className="message-data-time">10:20 AM, Today</span>
								</div>
								<div className="message my-message">
									Actually everything was fine. I'm very excited to show this to our team.
								</div>
							</li>
							
							<li className='message-writing'>
								<div className="message-data">
									<span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
								</div>
								<div className='sp-time'>
									<span className='spinme-writing'>
										<div className='spinner'>
											<div className='bounce1'></div>
											<div className='bounce2'></div>
											<div className='bounce3'></div>
										</div>
									</span>
								</div>
							</li>

						</ul>
						
					</div>

				</div>
				<div className="input-area">
					<div className="input-wrapper">
						<input type="text" value="" placeholder="Write your message in here..." />
						<i className="fa fa-smile-o"></i>
						<i className="fa fa-paperclip"></i>
					</div>
					<button className="send-btn">
						Submit
						<i className="fa fa-paper-plane-o"></i>
					</button>
				</div>
			</div>
		);
	}
}

export default UserChat;