import Navigation from "@/app/component/navigation";
import Brands from "@/app/component/brands";
import Arrivals from "@/app/component/arrivals";
import Advertisment from "@/app/component/advertisment";
import Customer from "@/app/component/customer";
import Footer from "@/app/component/footer";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";



export default function Home() {
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
                <BreadcrumbLink href="/new_arrivals" className="text-black font-bold">New Arrivals</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>
    <Brands/>
    <Arrivals/>
    
    <Advertisment/>
    <Customer/>
   
    <Footer/>
    </> 
    
  );
}
