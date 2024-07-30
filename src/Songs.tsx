import { ReactElement } from "react";
import { Song } from "./Song";
import { songdata } from "./data";

export function Songs(): ReactElement {
	return (
		<div className="songs">
			{songdata.map((song) => (<Song data={song} key={song.id} />))}
		</div>
	);
}