import Image from 'next/image'
import { Heart, Share2, BarChart2 } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface ProductCardProps {
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  badge?: 'sale' | 'new'
}

export function ProductCard({ name, category, price, originalPrice, image, badge }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="relative">
        {badge && (
          <span className={`badge ${badge === 'sale' ? 'badge-sale' : 'badge-new'}`}>
            {badge === 'sale' ? '-20%' : 'New'}
          </span>
        )}
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full object-cover aspect-square"
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex gap-2 bg-white/90 p-2 rounded-lg">
            <button>
              <Share2 className="h-4 w-4" />
            </button>
            <button >
              <BarChart2 className="h-4 w-4" />
            </button>
            <button >
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
      <p className="p-4 pt-0 flex justify-between">
        <div className="flex gap-2">
          <span className="font-medium">Rp {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through">
              Rp {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </p>
    </div>
  )
}

