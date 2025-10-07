import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/watchlist")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/watchlist"!</div>;
}
