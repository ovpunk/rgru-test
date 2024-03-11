import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home.tsx";
import { CurrentPost } from "./pages/currentPost/currentPost.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <CurrentPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
