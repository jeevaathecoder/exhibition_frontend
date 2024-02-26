import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Table, Input} from "@nextui-org/react";
import ExhibitorTable from "./exhibitortable";
import styles from "./cardbody.module.css"

export default function ExhibitorCard() {
  
  return (
    <div className={styles.cardbody}>
      <Card className="w-full">
        <CardHeader className="flex gap-3">
          
          <div className="flex flex-col justify-center justify-items-center text-center">
            <p className="text-xl font-bold">Stall Detials</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          
        <div >

          <ExhibitorTable />

        </div>

        </CardBody>
        <Divider/>
        <CardFooter>
          
            <p>Footer if there is any.</p>
          
        </CardFooter>
      </Card>
    </div>
  );
}
