import { ReactElement } from "react";

export function Song(): ReactElement {
	return (
		<div className="song">
			<p>image of song here</p>
			<p className="artist-name">John Lennon</p>
			<p className="song-name">Save the room</p>
		</div>
	);
}