import styles from "./ZX7Speaker.module.css"
import "../../App.css"
import { useNavigate } from "react-router-dom"

const ZX7Speaker = () => {
  const navigate=useNavigate()
  return (
    <div className={`container ${styles.container}`}>
        <div className={styles.containerChild}>
        <h3>ZX7 SPEAKER</h3>
        <button 
        onClick={()=>{
          navigate("/single-product/zx7-speaker")
        }}
        className="button3">SEE PRODUCT</button>
        </div>

        <img src="/aasets/Bitmap (3).png" alt="" />
    </div>
  )
}

export default ZX7Speaker