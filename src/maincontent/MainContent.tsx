import { ReactElement, useState } from "react";
import { Playlist } from "./Playlist";
import { Player } from "./Player";
import { ISong } from "./Song";
import { songdata } from "../data";
import "./MainContent.css";

export function MainContent(): ReactElement {
	const [selectedSong, setSelectedSong] = useState<ISong>(songdata[0]);

	const handleSongClick = (song: ISong) => {
		setSelectedSong(song);
		console.log(selectedSong);
	};

	return (
		<main className="main-container">
			<Playlist onSongClick={handleSongClick} />
			<Player song={selectedSong} />
		</main>
	);
}