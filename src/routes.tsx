import { lazy, Suspense } from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import App from "@/App";

const Index = lazy(() => import("@/routes/index"));

export default createRoutesFromElements([
  <Route path="/" element={<App />}>
    <Route
      index
      element={
        <Suspense>
          <Index />
        </Suspense>
      }
    />
  </Route>,
]);
