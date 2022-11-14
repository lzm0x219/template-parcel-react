import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";

const container = document.getElementById("root")!;

const root = createRoot(container);

const router = createBrowserRouter(routes);

if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => router.dispose());
}

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
