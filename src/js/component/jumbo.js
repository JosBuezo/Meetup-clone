import React from "react";
import "../../styles/home.css";
import { Jumbotron, Button } from "reactstrap";
import CheeringCrowd from "../../../Cheering-Crowd.mp4";

export class Jumbo extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron>
					<div className="homepage-hero-module">
						<div className="video-container">
							<div className="filter" />
							<video className="videoTag" autoPlay loop muted>
								<source src="./Cheering-Crowd.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
					<h1 className="display-3">The real world is calling</h1>
					<hr className="my-2" />
					<p>See what is happening soon in your area.</p>
					<p className="lead">
						<Button className="Join" color="primary">
							Join MeetUp
						</Button>
					</p>
				</Jumbotron>
			</div>
		);
	}
}
