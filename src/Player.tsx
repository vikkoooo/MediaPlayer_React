import { ReactElement } from "react";
import { songdata } from "./data";

export function Player(): ReactElement {
	return (
		<div className="player">
			<img src={songdata[0].imagepath} className="song-image-large" />

			<div className="player-info-row">
				<span className="material-symbols-outlined">add_circle</span>
				<div className="song-info">
					<p className="artist-name">{songdata[0].artist}</p>
					<p className="song-name">{songdata[0].name}</p>
				</div>
				<span className="material-symbols-outlined">favorite</span>
			</div>

			<div className="player-time-row">
				<p className="time-elapsed">0:40</p>
				<span className="loader" />
				<p className="time-song-length">3:42</p>
			</div>

			<div className="player-nav-row">
				<span className="material-symbols-outlined">repeat</span>
				<span className="material-symbols-outlined">fast_rewind</span>
				<span className="material-symbols-outlined">play_circle</span>
				<span className="material-symbols-outlined">fast_forward</span>
				<span className="material-symbols-outlined">shuffle</span>
			</div>
		</div>
	);
}