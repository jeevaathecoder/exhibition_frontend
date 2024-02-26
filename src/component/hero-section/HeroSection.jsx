"use client"

import styles from "./hero.module.css"


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-8'>

            <div className={`col-span-8`}>
                    
                    <img
                        src="/images/exhibPic.webp"
                        alt="My Image"
                        width={400}
                        height={1500}
                    />
                
            </div>
            
        </div> 
    </section>
  )
}

export default HeroSection