import styles from "./banner.module.css"

interface BannerProps{
    src: string
    alt: string
}

function Banner({src,alt}: BannerProps){
    return(
        <img src={src} alt={alt} className={styles.banner}/>
    )
}

export default Banner