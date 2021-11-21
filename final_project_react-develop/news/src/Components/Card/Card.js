import imageDefault from '../Card/defaultIMG.jpeg'
import styles from './Card.module.css'

const Card = ({news}) => {


    return (
        <div>
            <div className={styles.main}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                    <img src={news.multimedia ? news.multimedia[0].url : "../Card/defaultIMG.jpeg"} alt="" />
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
