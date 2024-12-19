"use client";


import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


type Product = [
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


export default function Add() {
  const [products, setProducts] = useState([
    { id: 1, price: 99, quantity: 1 },
    
  ]);

  const increaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <section className="pt-5">
       
        {/* Product List */}
        <div>
          <div >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b pb-5 mb-5"
              >
                <div className="flex items-start gap-4 text-lg font-semibold bg-gray-100 rounded-3xl px-5 py-2">
                    <button className="px-3"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
                {product.quantity}
                <button className="px-3"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                
                </div>
                <Button className="rounded-3xl px-28 hover:bg-white hover:text-black hover:border-2 hover:border-gray-200">
                  <Link href="/cart">Add to Cart</Link></Button>
              </div>
            ))}
          <div className="flex justify-between font-bold text-sm mb-6 pt-5 ">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <hr/>
           
          </div>
        </div>
      </section>
   
    
  );
}
