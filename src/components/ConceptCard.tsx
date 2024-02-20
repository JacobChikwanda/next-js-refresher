import Link from "next/link"

interface ConceptCardProps {
    title: string,
    demoLink: string,
    description: string,
    codeLink: string
}

const ConceptCard = ({ demoLink, title, description, codeLink }:ConceptCardProps) => {
  return (
    <div className="bg-white break-inside-avoid drop-shadow-md rounded-md p-3 w-full space-y-4">
        <div className="space-y-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-md text-slate-500 leading-5">{description}</p>
        </div>
        <div className="space-x-2">
            <Link href={demoLink} className="bg-orange-500 inline-block text-white px-3 py-1 rounded-md hover:bg-orange-400">View Demo</Link>
            <Link href={codeLink} className="bg-purple-500 inline-block text-white px-3 py-1 rounded-md hover:bg-purple-400">View Code</Link>
        </div>
    </div>
  )
}

export default ConceptCard