import { ReactElement } from "react";
import { ISong } from "./interfaces";

interface ISongProps {
	data: ISong
}

export function Song(song: ISongProps): ReactElement {
	return (
		<div className="song">
			<p>image of song here</p>
			<div className="song-info">
				<p className="artist-name">{song.data.artist}</p>
				<p className="song-name">{song.data.name}</p>
			</div>
			<span className="material-symbols-outlined">play_circle</span>
		</div>
	);
}