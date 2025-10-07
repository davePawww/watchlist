import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/bitcoinAnalysis')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bitcoinAnalysis"!</div>
}
