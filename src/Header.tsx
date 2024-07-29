import { ReactElement } from "react";
import { BackButton } from "./BackButton";
import { MoreButton } from "./MoreButton";
import { PlaylistName } from "./PlaylistName";
import "./Header.css"

export function Header(): ReactElement {
	return (
		<header className="header">
			<BackButton />
			<p className="header-text">Playlist -<PlaylistName /></p>
			<MoreButton />
		</header>
	);
}