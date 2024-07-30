import { ReactElement } from "react";
import { songdata } from "./data";

export function Player(): ReactElement {
	return (
		<div className="player">
			<img src={songdata[0].imagepath} className="song-image-large" />

			<div className="row1">
				<span className="material-symbols-outlined">add_circle</span>
				<div className="song-info">
					<p className="artist-name">{songdata[0].artist}</p>
					<p className="song-name">{songdata[0].name}</p>
				</div>
				<span className="material-symbols-outlined">favorite</span>
			</div>

			<div className="row2">
				<p className="time-elapsed">0:40</p>
				<span className="loader" />
				<p className="time-song-length">3:42</p>
			</div>

			<span className="material-symbols-outlined">play_circle</span>

		</div>
	);
}