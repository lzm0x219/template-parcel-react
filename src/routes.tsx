import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";
import App from "@/App";

const Index = lazy(() => import("@/routes/index"));

const routes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: (
					<Suspense>
						<Index />
					</Suspense>
				),
			},
		],
	},
];

export default routes;
