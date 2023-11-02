import type { LinksFunction } from "@remix-run/node";
import { LiveReload, Outlet, Scripts, Links } from "@remix-run/react";
import { ScrollRestoration } from "react-router-dom";

import globalLargeStylesUrl from "~/styles/global-large.css";
import globalMediumStylesUrl from "~/styles/global-medium.css";
import globalStylesUrl from "~/styles/global.css";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: globalStylesUrl },
	{
		rel: "stylesheet",
		href: globalMediumStylesUrl,
		media: "print, (min-width: 640px)",
	},
	{
		rel: "stylesheet",
		href: globalLargeStylesUrl,
		media: "screen and (min-width: 1024px)",
	},
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>App Jokes</title>
				<Links />
				{/* <Meta /> */}
			</head>
			<body>
				<Outlet />
				<LiveReload />
				<Scripts />
				<ScrollRestoration />
			</body>
		</html>
	);
}
