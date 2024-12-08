import Link from "next/link"
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci"


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
        <img  src={"/images/logo.jpeg"} 
        width={104}
         height={100}
        />
        
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="text-black hover:text-[#B88E2F] transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-black hover:text-[#B88E2F] transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="text-black hover:text-[#B88E2F] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-[#B88E2F] transition-colors">
            Contact
          </Link>
        </nav>
        <div className="icon">
            <CiUser className="h-5 w-5" />
            <span className="sr-only">Account</span>

            <CiSearch className="h-5 w-5" />
            <span className="sr-only">Search</span>
         
            <CiHeart  className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
    
            <CiShoppingCart  className="h-5 w-5" />
            <span className="sr-only">Cart</span>
     
        </div>
      </div>
    </header>
  )
}

