import {createBrowserRouter} from "react-router-dom";
import {App} from "@/app/App";
import {Suspense} from "react";
import {LazyAbout} from "@/pages/about/About.lazy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about',
        element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
      },
    ]
  },
]);