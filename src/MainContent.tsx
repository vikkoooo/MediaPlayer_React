import { ReactElement } from "react";
import { Songs } from "./Songs";
import { Player } from "./Player";
import "./MainContent.css";

export function MainContent(): ReactElement {
	return (
		<main className="main-container">
			<Songs />
			<Player />
		</main>
	);
}