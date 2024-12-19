import Image from "next/image";


export default function Home() {
    return (
      <>
      <div className="mt-10 mx-20 pb-10 bg-zinc-100 rounded-3xl">
      <div>
            <h1 className="text-center item-center text-5xl font-extrabold font-sans pt-10 pb-10">
                BROWSE BY DRESS STYLE</h1>
        </div>
        <div className="md:flex gap-5 pt-10 px-20 md:pt-10 md:px-80">
                              <div>
                            <Image src="/img-16.png" alt="rating" width={300} height={500}/>
                            <Image src="/img-18.png" alt="rating" width={300} height={500} className="pt-5" />
                            </div>
                            <div>
                            <Image src="/img-17.png" alt="rating" width={300} height={500} className="pt-5 md:pt-0" />
                            <Image src="/img-19.png" alt="rating" width={300} height={500} className="pt-5" />
                            </div>
                            </div>
      </div>
      </>

    );
}