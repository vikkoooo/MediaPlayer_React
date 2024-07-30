import { ReactElement } from "react";

export interface ISong {
	id: string;
	artist: string;
	name: string;
	imagepath: string;
}

interface ISongProps {
	data: ISong
	onSongClick: (song: ISong) => void; // i dont understand this
}

export function Song({ data, onSongClick }: ISongProps): ReactElement {
	return (
		<div className="song" onClick={() => onSongClick(data)}>{/*i dont understand this one*/}
			<img src={data.imagepath} className="song-image" />
			<div className="song-info">
				<p className="artist-name">{data.artist}</p>
				<p className="song-name">{data.name}</p>
			</div>
			<span className="material-symbols-outlined">play_circle</span>
		</div>
	);
}