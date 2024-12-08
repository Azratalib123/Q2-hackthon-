import Image from 'next/image'
import { Heart, Share2, BarChart2 } from 'lucide-react'
import styles from '../styles/products.module.css'

const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    image: '/images/tab.png',
    tag: 'sale',
    discount: '-30%',
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: '/images/ca0554ba-2d0c-4054-9861-e0b9cc4bcd5f.jpeg',
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    oldPrice: 14000000,
    image: '/images/9accda0e-527a-4974-b437-402f0c07a8cb.jpeg',
    tag: 'sale',
    discount: '-50%',
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    image: '/images/imaggg.jpeg',
    tag: 'new',
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 1500000,
    image: '/images/dd3df051-9d4b-4a97-bd16-61576e1fea63.jpeg',
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 150000,
    image: '/images/img.png',
    tag: 'new',
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 7000000,
    oldPrice: 14000000,
    image: '/images/imge.jpeg',
    tag: 'sale',
    discount: '-50%',
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500000,
    image: '/images/iamm.jpeg',
    tag: 'new',
  },
]

export function ProductsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.tag && (
                <span
                  className={`${styles.tag} ${
                    product.tag === 'new' ? styles.new : styles.sale
                  }`}
                >
                  {product.discount || 'New'}
                </span>
              )}
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.price}>
                Rp {product.price.toLocaleString()}
                {product.oldPrice && (
                  <span className={styles.oldPrice}>
                    Rp {product.oldPrice.toLocaleString()}
                  </span>
                )}
              </p>
            </div>
            <div className={styles.actions}>
              <button className={styles.actionButton}>
                <Share2 href='/' className="w-4 h-4" />
                Share
              </button>
              <button className={styles.actionButton}>
               <BarChart2  className="w-4 h-4" />
                Compare
              </button>
              <button className={styles.actionButton}>
                <Heart className="w-4 h-4" />
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}