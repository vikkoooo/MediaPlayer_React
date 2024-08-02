import { ReactElement } from "react";
import { ISong, Song } from "./Song";
import { songdata } from "../data";

interface IPlaylistProps {
	onSongClick: (song: ISong) => void;
}

export function Playlist(prop: IPlaylistProps): ReactElement {
	return (
		<div className="playlist">
			{songdata.map((song) =>
				(<Song key={song.id} song={song} onSongClick={prop.onSongClick} />))}
		</div>
	);
}