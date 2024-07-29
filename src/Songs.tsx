import { ReactElement } from "react";
import { Song } from "./Song";

export function Songs(): ReactElement {
	return (
		<div className="songs">
			<Song />
			<Song />
			<Song />
			<Song />
			<Song />
		</div>

	);
}