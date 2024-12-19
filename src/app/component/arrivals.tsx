import Link from "next/link";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {Button} from "@/components/ui/button";  
  


const products = [
    { 
      id: 1, 
      name: "T-shirt with Tape Details", 
      description: "4.5/5", 
      price: 120,
      image: "/img-8.png"
    },
    { 
      id: 2, 
      name: "Skinny Fit Jeans", 
      description: "3.5/5", 
      price: 240,
      image: "/img-9.png"
    },
    { 
      id: 3, 
      name: "Checkered Shirt", 
      description: "4.5/5", 
      price: 180,
      image: "/img-10.png"
    },
    { 
      id: 4, 
      name: "Sleeve Striped T-shirt", 
      description: "4.5/5", 
      price: 130,
      image: "/img-11.png"
    }
  ];




export default function Arrivals() {
    return (
      <>
      <div className="pt-20">
        <div>
            <h1 className="text-center item-center text-5xl font-extrabold font-sans pb-5">
                NEW ARRIVALS</h1>
        </div>
        <div className="hidden md:block">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-20 pt-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="hover:shadow-lg transition"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-fit h-fit mb-2 rounded"
                />
                <div className="flex gap-5">
                  <div>
                <h2 className="text-sm font-semibold">{product.name}</h2>
                <p className="text-xs text-gray-700 pt-2">{product.description}</p>
                <p className="flex gap-5 text-lg  font-bold mt-2">${product.price}</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
                </div> 
              </div>
            </Link>
          ))}
        </div>
        </div>
         



           <div className="block md:hidden px-20 pt-5">
            <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex p-1 bg-transparent border-none">
                    {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-60 h-fit mb-2 rounded"
                />
                <div className="flex justify-between">
                  <div>
                <h2 className="text-sm font-semibold">{product.name}</h2>
                <p className="text-xs text-gray-700">{product.description}</p>
                <p className="flex gap-5 text-base font-bold mt-2">${product.price}</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart hover:bg-teal-600 bg-gray-100 rounded-sm p-1 hover:stroke-white"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
                </div> 
              </div>
            </Link>
          ))}
                    </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      <div className="flex items-center justify-center">
      <Button className="my-20 mx-20 px-20 items-center bg-transparent border-2 border-gray-100 rounded-3xl text-black hover:bg-black hover:text-white">
      View All</Button>
      </div>
    <hr/>
      </div>
      </>

    );
}