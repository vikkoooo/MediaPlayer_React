import { ReactElement } from "react";
import { ISong } from "./interfaces";

interface ISongProps {
	data: ISong
}

export function Song({ data }: ISongProps): ReactElement {
	return (
		<div className="song">
			<img src={data.imagepath} className="song-image" />
			<div className="song-info">
				<p className="artist-name">{data.artist}</p>
				<p className="song-name">{data.name}</p>
			</div>
			<span className="material-symbols-outlined">play_circle</span>
		</div>
	);
}