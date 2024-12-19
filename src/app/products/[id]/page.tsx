"use client";

import { useParams } from "next/navigation";
import Navigation from "@/app/component/navigation";
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Image from "next/image";
import Add from "@/app/component/add";
import Customer from "@/app/component/customer";
import Arrivals from "@/app/component/arrivals";


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
      },
      { 
        id: 5, 
        name: "Vertical Striped Shirt", 
        description: "5.0/5", 
        price: 212,
        image: "/img-12.png"
      },
      { 
        id: 6, 
        name: "Courage Graphic T-shirt", 
        description: "4.0/5", 
        price: 145,
        image: "/img-13.png"
      },
      { 
        id: 7, 
        name: "Loose Fit Bermuda Shorts", 
        description: "3.0/5", 
        price: 80,
        image: "/img-14.png"
      },
      { 
        id: 8, 
        name: "Faded Skinny Jeans", 
        description: "4.5/5", 
        price: 210,
        image: "/img-15.png"
      },
      ];

export default function Products() {
  const params = useParams(); 
  const id = params.id as string; 

  const productId = id ? parseInt(id, 10) : null; 
  const product = products.find((item) => item.id === productId); 

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div>
      <Navigation/>
      


      <hr/>
      <div className="pt-10 pb-10 mx-10 md:mx-40">
      <div className="md:flex gap-5 product-detail">
      {product.image && (
          <Image
            src={product.image}
            alt={product.name || "Product Image"}
            width={500}
            height={300}
          />
        )}
        <div className="container md:w-[600px] text-justify md:px-10">
        <h1 className="text-3xl font-sans font-bold pt-5">{product.name}</h1>
        <p className="text-gray-700 pt-5 text-sm">{product.description}</p>
        <p className="font-bold text-xl  pt-5 ">${product.price}</p>

        <div className="pt-5">
        <FormControl>
      <FormLabel>Select Colors</FormLabel>
      <RadioGroup defaultValue="medium" name="radio-buttons-group">
        <div className="flex gap-5">
        <Radio value="primary" label="Blue" color="primary" />
        <Radio value="neutral" label="Black" color="neutral" />
        <Radio value="danger" label="Red" color="danger" />
        <Radio value="success" label="Green" color="success" />
        <Radio value="warning" label="Brown" color="warning" />
        </div>
      </RadioGroup>
         </FormControl>
         </div>

         <div className="pt-5">
        <FormControl>
      <FormLabel>Choose Size</FormLabel>
      <RadioGroup defaultValue="medium" name="radio-buttons-group">
        <div className="flex gap-5">
        <Radio value="primary" label="Small" color="neutral" />
        <Radio value="neutral" label="Medium" color="neutral" />
        <Radio value="danger" label="Large" color="neutral" />
        <Radio value="success" label="X-Large" color="neutral" />
        </div>
      </RadioGroup>
         </FormControl>
         </div>
        
        
        <Add/>
        
        
        </div>
      </div>
      </div>
      <Customer/>
      <Arrivals/>
    </div>

  );
}
