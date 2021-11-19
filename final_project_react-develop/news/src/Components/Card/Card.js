// import { useState } from 'react'
import styles from './Card.module.css'

const Card = ({news}) => {


    return (
        <div>
            <div className={styles.main}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                    <img src={news.multimedia ? news.multimedia[0].url : "https://lh3.googleusercontent.com/proxy/ogrIFw84r5KznDb3mtP264Luev-UAZL3K2hxwAo0gtZttRySTSZ3OsMIhfVZpgwIyN3n3-7Lm9FRmlkKRUmJRKVwRvzbWzFMV13J0eo5fYWVyv04o0gYXMdLN6h5JFV4xUvPVMcJOzsMjBg"} alt="" />
                    </div>
                    <div className={styles.card_content}>
                        <h4>{news.title}</h4>
                        <small>{news.byline}</small>
                        <p>{news.abstract}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
