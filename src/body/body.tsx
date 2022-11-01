import styles from "./body.module.css"
import LogoBody from "../assets/LogoBody.svg"

export const Body = () => {

    return (
        <div className={styles.BodyMain}>
            <div>
                <img src={LogoBody} alt="" width={730} height={410} className={styles.Logo}/>
            </div>
        </div>
    )

}