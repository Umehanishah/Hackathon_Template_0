import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { Input } from "@/components/ui/input"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  

export default function Home() {
  return (
    <div className="">

        {/* headline */}
        <div className="bg-gray-950">
            <p className="text-white text-xs items-center text-center py-2">
                Sing up and get 20% off to your first order.
                <Link href="/sing-up" className="underline px-3">Sing Up Now</Link>
                </p>
        </div>
       

       <div className="md:mx-20">
        <div className="flex justify-around pt-5 pb-5">
        <div className="block lg:hidden">
            <Sheet>
                <SheetTrigger>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetDescription>
                            <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="mt-10 text-lg text-black hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">
                                <Link href="/shop">Shop</Link>
                                </NavigationMenuTrigger>
                            <NavigationMenuContent className="flex flex-col px-5 py-5">
                                <NavigationMenuLink className="hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">Men`s</NavigationMenuLink>
                                <hr/>
                                <NavigationMenuLink className="pt-3 hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">Women`s</NavigationMenuLink>
                                <hr/>
                                <NavigationMenuLink className="pt-3 hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">Children`s</NavigationMenuLink>
                            </NavigationMenuContent>
                                <h2 className="text-left mt-5 text-lg text-black pt-3 hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">
                                <Link href="/sale">On Sale</Link></h2>
                           
                                <h2 className="text-left mt-5 text-lg text-black pt-3 hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">
                                <Link href="/new_arrivals">New Arrivalss</Link></h2>
                            
                                <h2 className="text-left mt-5 text-lg text-black pt-3 hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">
                                <Link href="/brands">Brands</Link></h2>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        </NavigationMenu>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>

            </div>

        {/* logo */}
        <div>
            <Link href="/">
            <Image src="/logo.png" alt="logo" width={160} height={22}/>
            </Link>
        </div>

        {/* Navigation bar */}
            <div className="hidden lg:block">
                <ul>
                    <li>
                    <NavigationMenu>
                        <NavigationMenuList  className="flex gap-5">
                            <NavigationMenuItem>
                            <NavigationMenuTrigger className="hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">
                                <Link href="/shop">Shop</Link>
                                </NavigationMenuTrigger>
                            <NavigationMenuContent className="flex flex-col px-5 py-5">
                                <NavigationMenuLink className="hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">Men`s</NavigationMenuLink>
                                <hr/>
                                <NavigationMenuLink className="pt-3 hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">Women`s</NavigationMenuLink>
                                <hr/>
                                <NavigationMenuLink className="pt-3 hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">Children`s</NavigationMenuLink>
                            </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <h2 className="hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">
                                <Link href="/sale">On Sale</Link></h2>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <h2 className="hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">
                                <Link href="/new_arrivals">New Arrivalss</Link></h2>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <h2 className="hover:text-white hover:bg-black hover:p-2 hover:rounded-sm">
                                <Link href="/brands">Brands</Link></h2>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        </NavigationMenu>

                    </li>
                </ul>
            </div>

        {/* Search area & icons */}
          
            <div className="flex gap-5 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <Input type="search" placeholder="Search for Products..." className="hidden md:block"/>
            <Link href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </Link>
            <Link href="/sing-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
            </Link>
            </div>
          

        

           

        
        </div>
        </div>




    </div>
    
  );
}
