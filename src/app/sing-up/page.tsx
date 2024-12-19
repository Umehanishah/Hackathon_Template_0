import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/component/navigation";
import Footer from "@/app/component/footer";
import Arrivals from "@/app/component/arrivals";
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




export default function Singup() {
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
                <BreadcrumbLink href="/singup" className="text-black font-bold">Sing Up</BreadcrumbLink>
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
    <Card className="w-[450px] md:w-[500px] pt-5">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription className="pt-3">
            Enter your details below</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 pt-5">
              <Input id="name" placeholder="Name" />
            </div>
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
        <Button className="bg-red-500 px-24 rounded-3xl md:mx-20 mt-5">Create Account</Button>
      </CardFooter>
      <CardFooter>
        <Button className="flex bg-transparent  rounded-3xl md:mx-20 border-2 border-gray-200 text-black hover:text-white px-20">
        <Image src="/icon.png" alt="icon" width={30} height={30}/>
          <Link href="/www.google.com">
          Sign up with Google</Link>
        </Button>
      </CardFooter>
      <p className="text-center pt-2 pb-20">Already have account?
        <Link href="/login">Log in</Link>
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