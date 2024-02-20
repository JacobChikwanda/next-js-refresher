import Link from 'next/link'
import { TiArrowBack } from "react-icons/ti";

interface ConceptsLayoutProps {
    children: React.ReactNode
}

const ConceptsLayout = ({ children }: ConceptsLayoutProps) => {
    return (
        <div className='md:w-9/12 md:mx-auto px-2 md:px-0'>
            <div className="group inline-block fixed top-0 md:left-2 right-2">
                <Link href={"/"}>
                    <button className='px-4 py-1 bg-black/30 md:bg-black md:hover:bg-white space-x-2 text-white mt-2 rounded-md'>
                        <TiArrowBack className='w-6 h-6 md:group-hover:text-black' />
                    </button>
                </Link>
            </div>
            {children}
        </div>
    )
}

export default ConceptsLayout