import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { memo } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <Separator />
      <main className="container mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center border-r border-l border-dashed p-4">
        <Outlet />
      </main>
      <Separator />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}

const Separator = memo(function Separator() {
  return <div className="border-t border-dashed" />;
});
