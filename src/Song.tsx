import { ReactElement } from "react";

export function Song(): ReactElement {
	return (
		<div className="song">
			<p>image of song here</p>
			<div className="song-info">
				<p className="artist-name">John Lennon</p>
				<p className="song-name">Save the room</p>
			</div>
			<span className="material-symbols-outlined">play_circle</span>
		</div>
	);
}