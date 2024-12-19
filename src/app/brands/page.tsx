import Navigation from "../component/navigation";
import Brands from "@/app/component/brands";
import Selling from "@/app/component/selling";
import Customer from "@/app/component/customer";
import Advertisment from "@/app/component/advertisment";
import Footer from "@/app/component/footer";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";




export default function Shop(){
    return(
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
                <BreadcrumbLink href="/brands" className="text-black font-bold">Brands</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>


        <Brands/>
        <Selling/>
        <Advertisment/>
        <Customer/>
        <Footer/>
        </>
    );
}