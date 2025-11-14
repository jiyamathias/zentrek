"use client"

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-[#1D2B53]">Zentrek</h2>
          <p className="mt-2 text-sm text-gray-600 max-w-[200px]">
            Travel helps companies manage payments easily.
          </p>
          <div className="flex gap-4 mt-4 text-gray-600 text-lg">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[#1D2B53] mb-1">Company</h3>
          <a className="text-gray-600 text-sm" href="#">About Us</a>
          <a className="text-gray-600 text-sm" href="#">Careers</a>
          <a className="text-gray-600 text-sm" href="#">Blog</a>
          <a className="text-gray-600 text-sm" href="#">Pricing</a>
        </div>

        {/* Destinations */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[#1D2B53] mb-1">Destinations</h3>
          <a className="text-gray-600 text-sm" href="#">Maldives</a>
          <a className="text-gray-600 text-sm" href="#">Los Angeles</a>
          <a className="text-gray-600 text-sm" href="#">Las Vegas</a>
          <a className="text-gray-600 text-sm" href="#">Toronto</a>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-[#1D2B53] mb-2">Contact Us</h3>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="send us an email"
              className="w-full border border-gray-300 rounded-l-lg px-3 py-2 text-sm"
            />
            <button className="bg-[#1D2B53] text-white px-5 rounded-r-lg text-sm">Send</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * We’ll send you weekly updates for your better tour packages.
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-10">
        Copyright © NFT2025. All Rights Reserved.
      </p>
    </footer>
  );
}

// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
// import Image from "next/image"

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-white border-t border-border py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Image src="/logo.png" alt="Zentrek" width={32} height={32} />
//               <span className="font-bold text-lg text-foreground">Zentrek</span>
//             </div>
//             <p className="text-sm text-muted-foreground mb-4">Travel helps companies manage payments easily</p>
//             <div className="flex gap-4">
//               <Facebook size={20} className="cursor-pointer text-primary hover:text-primary/80" />
//               <Twitter size={20} className="cursor-pointer text-primary hover:text-primary/80" />
//               <Linkedin size={20} className="cursor-pointer text-primary hover:text-primary/80" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-bold text-foreground mb-4">Company</h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>
//                 <a href="#" className="hover:text-primary transition">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition">
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Information */}
//           <div>
//             <h4 className="font-bold text-foreground mb-4">Destinations</h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>
//                 <a href="#" className="hover:text-primary transition">
//                   Maldives
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition">
//                   Los Angeles
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition">
//                   Las Vegas
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition">
//                   Toronto
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center gap-2">
//                 <Mail size={16} />
//                 <span className="text-muted-foreground">info@journeys.com</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone size={16} />
//                 <span className="text-muted-foreground">+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <MapPin size={16} />
//                 <span className="text-muted-foreground">123 Travel St, World City</span>
//               </li>
//             </ul>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full bg-muted border border-border rounded px-3 py-2 text-sm mb-2 placeholder-muted-foreground"
//             />
//             <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded font-semibold transition">
//               Send
//             </button>
//             <p className="text-xs text-muted-foreground mt-2">
//               We will send you weekly updates for your better tour packages
//             </p>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
//           <p>Copyright © NFT2025. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
