import Navigation from "@/app/component/navigation";
import Header from "@/app/component/header";
import Brands from "@/app/component/brands";
import Arrivals from "@/app/component/arrivals";
import Selling from "@/app/component/selling";
import Advertisment from "@/app/component/advertisment";
import Customer from "@/app/component/customer";
import Updates from "@/app/component/updates";
import Footer from "@/app/component/footer";


export default function Home() {
  return (
    <>
    <Navigation/>
    <Header/>
    <Brands/>
    <Arrivals/>
    <Selling/>
    <Advertisment/>
    <Customer/>
    <Updates/>
    <Footer/>
    </> 
    
  );
}
