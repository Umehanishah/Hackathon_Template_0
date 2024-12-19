import Image from "next/image";
import Link from "next/link";




export default function Home() {
    return (
      <>
        <div className="bg-gray-950">
        <div className="grid grid-cols-3 md:grid-cols-5 justify-around mx-14 pt-5 pb-5 items-center">
            <Link href="/brands">
            <Image src="/img-3.png" alt="img-3" width={120} height={50}/>
            </Link>
            <Link href="/brands">
            <Image src="/img-4.png" alt="img-3" width={100} height={50}/>
            </Link>
            <Link href="/brands">
            <Image src="/img-5.png" alt="img-3" width={100} height={50}/>
            </Link>
            <Link href="/brands">
            <Image src="/img-6.png" alt="img-3" width={100} height={50}/>
            </Link>
            <Link href="/brands">
            <Image src="/img-7.png" alt="img-3" width={150} height={50}/>
            </Link>
        </div>
        </div>
      </>
    );
}