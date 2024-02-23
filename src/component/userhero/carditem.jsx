"use client"

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import PaginationUI from "./paginationUI";
import Cardbody from "./cardbody";
import styles from "./cardbody.module.css";


export default function Carditem() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="Stall Icon"
              height={80}
              radius="sm"
              src="/images/stall.png"
              width={80}
            />
            <div className="flex flex-col">
              <p className="text-large font-balck ">Stall 1</p>
              <p className="text-small text-default-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eos tempore odit impedit, aut praesentium, facilis accusantium consectetur laborum consequatur 
                    esse vel sed fugiat? Quidem nemo cum quae, earum architecto officiis?
              </p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            

          <Cardbody />
          




          </CardBody>
          <Divider/>
          <CardFooter>
            
            <p className="text-small font font-balck ">Some text for stall footer [only if available]</p>
           
          </CardFooter>
        </Card>
      </div>
      <div className="w-full flex flex-col items-center">
        <PaginationUI className="mx-auto w-full min-w-[400px]"/>
      </div>
    </div>
  );
}
