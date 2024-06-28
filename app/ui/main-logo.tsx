import Link from "next/link";
import Image from "next/image"

export default function Logo() {
    return (
        <Link
            href={'/'}
        >
            <Image
                src='/WE_Logo_CIRCLE_Black.png'
                alt='main logo'
                width={70}
                height={70}
                className="mx-7"
            />
        </Link>
    )
}