import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
