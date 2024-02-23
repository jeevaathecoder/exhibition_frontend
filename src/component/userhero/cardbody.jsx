import Carousel from "./Carousel";
import Image from "next/image";


const slides = [
    "stall1.png",
    "stall2.png",
    "stall3.png",
    "stall4.png",
]

export default function Cardbody(){
    return(
        <main className="App">
            <div className="max-w-lg">
                <Carousel>
                    {slides.map((s) => (
                        <Image src="/images/{s}"
                        width={150}
                        height={150}/>
                    ))}
                </Carousel>
            </div>
        </main>
    )
}