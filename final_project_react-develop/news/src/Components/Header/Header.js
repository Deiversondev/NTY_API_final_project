import styles from './Header.module.css'

const Header = ({Link}) => {

    return (
        <div>
             <header>
                 <div className={styles.trending}>

                     <a href="" >
                     <Link to= "/">Trending</Link>
                     </a>
                 </div>
                <div className={styles.links}>
                    <a href="">
                         <Link to= "/tech">Technology</Link>
                    </a>
                    <a href="">
                         <Link to= "/science">Science</Link>
                    </a>
                    <a href="">
                         <Link to= "/health">Health</Link>
                    </a>
                    <a href="">
                         <Link to= "/arts">Arts</Link>
                    </a>
                </div>
            </header>

        </div>
    )
}

export default Header;
