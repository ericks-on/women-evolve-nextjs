import Image from "next/image";
import Link from "next/link";

export default function HiglightCard ({src, heading, url}:{
    src:string,
    heading:string,
    url: string
}) {
    return (
        <Link href={url}>
            <div className="flex flex-col w-64 h-80 p-1 justify-center items-center">
                <div className="h-4/5 w-full">
                    <Image
                        src={src}
                        alt="image"
                        height={500}
                        width={500} />
                </div>
                <p 
                    className="h-1/5 font-bold flex justify-center items-center"
                >{heading.toUpperCase()}</p>
                
            </div>
        </Link>
    )
}