import Image from "next/image";
import Link from "next/link";

export default function HiglightCard ({src, heading, url}:{
    src:string,
    heading:string,
    url: string
}) {
    return (
        <Link href={url}>
            <div className="flex flex-col w-80 h-96 p-1 justify-center items-center mx-auto">
                <div className="h-4/5 w-full">
                    <Image
                    className="h-full w-full rounded"
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