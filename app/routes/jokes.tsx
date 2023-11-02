import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "../styles/jokes.css";

import { Link, Outlet } from "@remix-run/react";
import { Box, Typography } from "@mui/material";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesUrl },
];

// export default function JokesRoute() {
// 	return (
// 		<Box ml={10} mt={10}>
// 			<Typography variant="h2" gutterBottom>
// 				J🎃KES
// 			</Typography>
// 			<main>
// 				<Outlet />
// 			</main>
// 		</Box>
// 	);
// }

export default function JokesRoute() {
	return (
		<div className="jokes-layout">
			<header className="jokes-header">
				<div className="container">
					<h1 className="home-link">
						<Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
							<span className="logo">🤪</span>
							<span className="logo-medium">J🤪KES</span>
						</Link>
					</h1>
				</div>
			</header>
			<main className="jokes-main">
				<div className="container">
					<div className="jokes-list">
						<Link to=".">Get a random joke</Link>
						<p>Here are a few more jokes to check out:</p>
						<ul>
							<li>
								<Link to="some-joke-id">Hippo</Link>
							</li>
						</ul>
						<Link to="new" className="button">
							Add your own
						</Link>
					</div>
					<div className="jokes-outlet">
						<Outlet />
					</div>
				</div>
			</main>
		</div>
	);
}
