import assets from '../Loading/loading_infinity.svg';
import styles from '../Loading/Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={assets} alt="" />
        </div>
    )
}

export default Loading
