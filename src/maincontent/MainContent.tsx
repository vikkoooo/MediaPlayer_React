import { ReactElement } from "react";
import { Playlist } from "./Playlist";
import { Player } from "./Player";
import "./MainContent.css";

export function MainContent(): ReactElement {
	return (
		<main className="main-container">
			<Playlist />
			<Player />
		</main>
	);
}