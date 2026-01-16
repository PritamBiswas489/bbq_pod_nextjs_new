 
import styles from '@/styles/Page.module.css'

export const metadata = {
  title: 'BBQ POD SPAIN - COMING SOON',
  description: 'Highest quality outdoor BBQ pods made from stainless steel, featuring built-in grills, sinks, fridges, storage, lighting and premium finishes',
  authors: [{ name: 'MyraStudio' }],
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      
      <a href="#" className={styles.logo}>
        🔥 BBQ POD SPAIN 🔥
      </a>
      <h1 className={styles.title}>
        Coming Soon
      </h1>
      <p className={styles.description}>
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  )
}