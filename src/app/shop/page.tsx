import Navigation from "@/app/component/navigation";
import Arrivals from "@/app/component/arrivals";
import Selling from "@/app/component/selling";
import Updates from "@/app/component/updates";
import Footer from "@/app/component/footer";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";



export default function Shop() {
  return (
    <>
    <Navigation/>
   
    <div className="mx-28 pt-10 pb-10">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/shop" className="text-black font-bold">Shop</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>
 
    
    <Selling/>
    <Arrivals/>
    <Updates/>
    <Footer/>
    </> 
    
  );
}
