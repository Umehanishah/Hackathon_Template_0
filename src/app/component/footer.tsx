import Image from "next/image";
import Link from "next/link";

export default function Arrivals() {
    return (
      <>
      <div className="bg-zinc-100 py-20 px-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 pb-10">
        <div className="pr-5">
          <Image src="/logo.png" alt="logo" width={150} height={100}/>
          <p className="text-gray-500 pt-5 text-sm">
            We have clothes that suits your style and which you`re proud to wear. From womem to men.</p>
            <div className="flex gap-3 pt-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter bg-white rounded-full p-1 border-2 hover:bg-black hover:stroke-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook bg-white rounded-full p-1 border-2 hover:bg-black hover:stroke-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram bg-white rounded-full p-1 border-2 hover:bg-black hover:stroke-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github bg-white rounded-full p-1 border-2 hover:bg-black hover:stroke-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
        </div>
        <div className="block md:hidden"></div>

        <div>
          <ul>
            <h2>COMPANY</h2>
            <li className="text-sm text-gray-500 pt-3">
              <Link href="/about">About</Link></li>
            <li className="text-sm text-gray-500 pt-3">Features</li>
            <li className="text-sm text-gray-500 pt-3">Works</li>
            <li className="text-sm text-gray-500 pt-3">Career</li>
          </ul>
        </div>

        <div>
          <ul>
            <h2>HELP</h2>
            <li className="text-sm text-gray-500 pt-3">Customer Support</li>
            <li className="text-sm text-gray-500 pt-3">Delivery Details</li>
            <li className="text-sm text-gray-500 pt-3">Terms & Conditions</li>
            <li className="text-sm text-gray-500 pt-3">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <ul>
            <h2>FAQ</h2>
            <li className="text-sm text-gray-500 pt-3">Account</li>
            <li className="text-sm text-gray-500 pt-3">Manage Deliveries</li>
            <li className="text-sm text-gray-500 pt-3">Orders</li>
            <li className="text-sm text-gray-500 pt-3">Payments</li>
          </ul>
        </div>

        <div>
          <ul>
            <h2>RESOURCES</h2>
            <li className="text-sm text-gray-500 pt-3">Free eBooks</li>
            <li className="text-sm text-gray-500 pt-3">Development tutorial</li>
            <li className="text-sm text-gray-500 pt-3">How to - Blog</li>
            <li className="text-sm text-gray-500 pt-3">Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="md:flex justify-between pt-10">
        <p className="text-sm text-gray-400">
          Shop.co@ 2000-2023. All Rights Reserved</p>
          <div className="flex">
            <Image src="/img-24.png" alt="img" width={60} height={30}/>
            <Image src="/img-20.png" alt="img" width={60} height={30}/>
            <Image src="/img-21.png" alt="img" width={60} height={30}/>
            <Image src="/img-22.png" alt="img" width={60} height={30}/>
            <Image src="/img-23.png" alt="img" width={60} height={30}/>
          </div>
      </div>
      </div>
      </>
    );
}