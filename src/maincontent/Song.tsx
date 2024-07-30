import { ReactElement } from "react";

export interface ISong {
	id: string;
	artist: string;
	name: string;
	imagepath: string;
}

interface ISongProps {
	song: ISong
	onSongClick: (song: ISong) => void;
}

export function Song(prop: ISongProps): ReactElement {
	return (
		<div className="song" onClick={() => prop.onSongClick(prop.song)}>
			<img src={prop.song.imagepath} className="song-image" />
			<div className="song-info">
				<p className="artist-name">{prop.song.artist}</p>
				<p className="song-name">{prop.song.name}</p>
			</div>
			<span className="material-symbols-outlined">play_circle</span>
		</div>
	);
}