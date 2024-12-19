import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <>
        
            
                <div className="md:grid grid-cols-2 
                bg-gray-100
                md:bg-[url('/img-1.png')] w-full repeat-0 px-10 md:px-28">
                    <div>
                    <h1 className="text-3xl md:text-6xl font-extrabold pt-5 md:pt-44 leading-tight">
                        FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="pt-5 text-sm text-gray-600">
                        Browse through our diverse range of meticulosly cradted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Button className="rounded-3xl px-10 py-5 mt-10">
                        <Link href="/shop">Shop Now</Link></Button>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:pb-16 text-center md:text-left">
                    <p className="text-xl md:text-4xl font-bold leading-5 pt-10">200+ <br/> 
                    <span className="text-sm font-light text-gray-500">International Brands</span></p>
                    <p className="text-xl md:text-4xl font-bold leading-5 pt-10">2,000+ <br/> 
                    <span className="text-sm font-light text-gray-500">High-Quality Products</span></p>
                    <p className="text-xl md:text-4xl font-bold leading-5 pt-10">30,000+ <br/> 
                    <span className="text-sm font-light text-gray-500">Happy Customers</span></p>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-2 md:gap-96 md:pl-20">
                        <Image src="/img-2.png" alt="img-2" width={50} height={50} className="md:pt-80"/>
                        <Image src="/img-1.1.png" alt="img-2" width={500} height={300} className="md:pt-80"/>
                        <Image src="/img-2.png" alt="img-2" width={80} height={80} className="pt-20 md:pt-32"/>
                    </div> 
                </div>


                
        </>
    );
}