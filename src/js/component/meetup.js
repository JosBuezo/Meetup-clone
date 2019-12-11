import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext.js";

export function Meetup(props) {
	return (
		<div className="text-center">
			<Context.Consumer>
				{({ store, actions }) => {
					let meetupID = this.props.match.params.theid;
					let meetupName = actions.findMeetupName(meetupID);
					return <Footer />;
				}}
			</Context.Consumer>
		</div>
	);
}

export class Events extends React.Component {
	render() {
		let parseMoment = (data, format) => {
			if (format == "date") {
				return <Events format="MM/DD/YYYY">{data}</Events>;
			}
			if (format == "time") {
				return (
					<Events format="LT" parse="HH:mm:ss">
						{data}
					</Events>
				);
			}
		};
		return (
			<>
				<Context.Consumer>
					{({ store, actions }) => {
						return store.events.map(event => {
							if (event) {
								return (
									<Events
										eventDate={parseMoment(event.meta_keys.day, "date")}
										eventTime={parseMoment(event.meta_keys.time, "time")}
										eventTitle={event.post_title}
										meetup={actions.findMeetupName(event.meta_keys._meetup)}
										meetupID={event.meta_keys._meetup}
										eventID={event.ID}
										key={event.ID}
									/>
								);
							} else {
								return <h5>Loading...</h5>;
							}
						});
					}}
				</Context.Consumer>
			</>
		);
	}
}

export default { Meetup };
Meetup.propTypes = {
	match: PropTypes.object
};
