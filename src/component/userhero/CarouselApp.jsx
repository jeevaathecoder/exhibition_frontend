"use client"

import React from "react";
import Image from "next/image"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Button} from "@nextui-org/react";
import styles from "./CarouselApp.module.css";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function CarouselApp(){
  return (

      <Carousel>
        <CarouselContent>
          <CarouselItem>



            <Card className="">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={60}
                  radius="sm"
                  src="/images/stallicon.png"
                  width={60}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-extrabold">Stall Title 1</p>
                  <p className="text-small text-default-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Nemo nulla hic officiis iusto voluptates ut excepturi totam ipsum corrupti? Nostrum, numquam? 
                          Obcaecati natus nostrum incidunt voluptatibus est esse hic minima.</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>

                <div className="flex justify-center items-center p-5">

                  <div className={`{$styles.imagewrapperwrapper} "flex-none h-96"`}>

                    <div className={styles.imagewrapper}>
                      <div class="vertical-align-baseline">
                        <Image
                          alt="nextui logo"
                          height={900}
                          radius="sm"
                          src="/images/exhibPic.webp"
                          width={300}
                        />
                      </div>

                    </div>

                  </div>

                  <div className={`{$styles.videowrapperwrapper} "justify-center flex-initial h-96"`}>

                    <div className={styles.videowrapper}>
                      <div className="vertical-align-baseline justify-items-center">
                        <video className={styles.borderradius} controls src={"/videos/stallVid.mp4"} alt="Stall video" height={200} autoPlay/>
                      </div>
                    </div>

                  </div>

                  <div className={`{$styles.imagewrapperwrapper} "flex-initial h-96"`}>

                    <div className={styles.imagewrapper}>
                      <div class="vertical-align-baseline">
                      <Button color="primary">Download Brochure</Button>
                      </div>
                    </div>

                  </div>
                </div>
                  
              </CardBody>
              <Divider/>
              <CardFooter>
                
                <p>This is opetional footre for the stalls</p>

              </CardFooter>
            </Card>

              
          </CarouselItem>

          <CarouselItem>



            <Card className="">
              <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={60}
                    radius="sm"
                    src="/images/stallicon.png"
                    width={60}
                  />
                <div className="flex flex-col">
                  <p className="text-lg font-extrabold">Stall Title 2</p>
                  <p className="text-small text-default-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Nemo nulla hic officiis iusto voluptates ut excepturi totam ipsum corrupti? Nostrum, numquam? 
                          Obcaecati natus nostrum incidunt voluptatibus est esse hic minima.</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>

                <div className="flex justify-center items-center p-5">

                  <div className={`{$styles.imagewrapperwrapper} "flex-none h-96"`}>

                    <div className={styles.imagewrapper}>
                      <div class="vertical-align-baseline">
                        <Image
                          alt="nextui logo"
                          height={900}
                          radius="sm"
                          src="/images/stall.png"
                          width={300}
                        />
                      </div>

                    </div>

                  </div>

                  <div className={`{$styles.videowrapperwrapper} "justify-center flex-initial h-96"`}>

                    <div className={styles.videowrapper}>
                      <div className="vertical-align-baseline justify-items-center">
                        <video className={styles.borderradius} controls src={"/videos/stallVid.mp4"} alt="Stall video" height={200} autoPlay/>
                      </div>
                    </div>

                  </div>

                  <div className={`{$styles.imagewrapperwrapper} "flex-initial h-96"`}>

                    <div className={styles.imagewrapper}>
                      <div class="vertical-align-baseline">
                        
                      </div>

                    </div>

                  </div>
                </div>
                  
              </CardBody>
              <Divider/>
              <CardFooter>
                
                <p>This is opetional footre for the stalls</p>

              </CardFooter>
            </Card>

              
          </CarouselItem>

          <CarouselItem> Item 3</CarouselItem>
          <CarouselItem> Item 4</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

  )
}