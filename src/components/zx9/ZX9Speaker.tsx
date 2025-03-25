import styles from "./ZX9Speaker.module.css"
import '../../App.css'
import { useNavigate } from "react-router-dom"


const ZX9Speaker = () => {

  const navigate=useNavigate()
  return (
    <>
    <div className={`container ${styles.speaker}`}>
     

      <img src="/aasets/Oval.png" alt="Oval 1" className={styles.oval1} />
      <img src="/aasets/Oval Copy.png" alt="Oval 2" className={styles.oval2} />
      <img src="/aasets/Oval Copy 2.png" alt="Oval 3" className={styles.oval3}/>
    

    

       <img className={styles.img1} src="/aasets/image-removebg-preview(38) (2).png" alt=""/>
            
           
       
      <div className={styles.zx9Speaker}>
        <h2>ZX9 SPEAKER</h2>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button 
        onClick={()=>{
          navigate("/single-product/zx9-speaker")
        }}
        className="button2">SEE PRODUCT</button>
      </div>


    
   
          
      

      </div>
    
    </>
  )
}

export default ZX9Speaker