import { ReactElement } from "react";
import { ISong, Song } from "./Song";
import { songdata } from "../data";

export function Playlist(): ReactElement {
	// function to handle the click (listener)
	const handleSongClick = (song: ISong) => {
		console.log(song);
	};

	return (
		<div className="playlist">
			{songdata.map((song) => (<Song data={song} key={song.id} onSongClick={handleSongClick} />))}
		</div>
	);
}