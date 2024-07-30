import { ReactElement } from "react";
import { Playlist } from "./Playlist";
import { Player } from "./Player";
import "./MainContent.css";
import { ISong } from "./Song";
import { songdata } from "../data";

export function MainContent(): ReactElement {
	let selectedSong = songdata[0]; // start with default data

	const handleSongClick = (song: ISong) => {
		selectedSong = song;
		console.log(selectedSong);
	};

	return (
		<main className="main-container">
			<Playlist onSongClick={handleSongClick} />
			<Player song={selectedSong} />
		</main>
	);
}