import ConceptCard from "@/components/ConceptCard";
import { RouteLinks } from "@/lib/RouteLinks";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="md:text-center bg-slate-100 p-4 mb-4 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to Next.js Refresher</h1>
        <p className="text-lg md:text-xl">Easily refresh on the most common Next.js topics with this repo <Link className="underline" target="_blank" href={"https://github.com/JacobChikwanda/next-js-refresher"}>here</Link>.</p>
      </div>
      <div className="px-4 md:w-3/4 md:mx-auto md:columns-2 xl:columns-3 space-y-3">
        {
          RouteLinks.map(routeLink => (
            <ConceptCard codeLink={routeLink.codeLink} title={routeLink.title} description={routeLink.description} demoLink={routeLink.demoLink} />
          ))
        }
      </div>
    </main>
  );
}
