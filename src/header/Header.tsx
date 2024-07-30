import { ReactElement } from "react";
import { BackButton } from "./BackButton";
import { MoreButton } from "./MoreButton";
import { PlaylistName } from "./PlaylistName";
import "./Header.css";

export function Header(): ReactElement {
	return (
		<header className="header">
			<BackButton />
			<div className="header-text-container">
				<p>Playlist</p>
				<span className="material-symbols-outlined">remove</span>
				<PlaylistName />
			</div>
			<MoreButton />
		</header >
	);
}