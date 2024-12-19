import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";


export default function Arrivals() {
    return (
      <>
      <div className="bg-gray-950 mx-20 rounded-2xl px-16 py-10">
            <div className="md:grid grid-cols-2">
                <div>
            <h2 className="text-white text-xl md:text-4xl font-bold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            </div>
            <div className="md:px-20 pt-5 md:pt-0">
            <Input type="search" placeholder="Enter your email address"/>
            <Button className="mt-5 bg-white text-black rounded-3xl px-10 md:px-28 hover:text-white hover:border-2 hover:border-white">Subscribe to Newsletter</Button>
            </div>
            </div>
      </div>
      </>
    );
}