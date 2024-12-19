import Image from "next/image";
import Navigation from "@/app/component/navigation";
import Arrivals from "@/app/component/arrivals";
import Footer from "@/app/component/footer";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"




export default function Login() {
    return (
      <main>
       <Navigation/>
      {/*1st section */}
      <section>
        <div className="mx-28 pt-10 pb-10">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/login" className="text-black font-bold">Login</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>
    </section>

    {/*2nd section */}
    <section className="mx-10 md:mx-28 pt-5 pb-20">
      <div className="flex gap-10">
      <div className="hidden md:block">
        <Image src="/img-1.1.png" alt="singup" width={500} height={100}/>
      </div>
      
      <div>
    <Card className="w-[450px] md:w-[500px] pt-10">
      <CardHeader>
        <CardTitle className="text-lg">Log In to Exclusive</CardTitle>
        <CardDescription className="pt-5">Enter your details below</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            
            <div className="flex flex-col space-y-1.5">
              <Input id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input id="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="bg-red-500 px-10 mt-5">Log In</Button>
       
      </CardFooter>
      <p className="bg-transparent border-none text-xs px-10 text-red-500 pb-10">
          Forget Password?
        </p>
    </Card>
    </div>
    </div>
    </section>
    <Arrivals/>
       <Footer/>
    </main>
    )
}