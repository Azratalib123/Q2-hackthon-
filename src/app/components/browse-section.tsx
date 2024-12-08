import Image from 'next/image'
import styles from '../styles/browse.module.css'

const categories = [
  {
    name: 'Dining',
    image: '/images/eb6c8907-78f7-43e7-a295-9ef7e1b6e1ac.jpeg',
  },
  {
    name: 'Living',
    image: '/images/d7ec94e1-b104-46d5-a333-57e4b8e7bc0e.jpeg',
  },
  {
    name: 'Bedroom',
    image: '/images/9accda0e-527a-4974-b437-402f0c07a8cb.jpeg',
  },
]

export function BrowseSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Browse The Range</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.name} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={category.image} // Use the dynamic image source from the category object
                alt={category.name} // Set the alt text to the category name
                fill
                className="object-cover"
              />
            </div>
            <h3 className={styles.categoryName}>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}