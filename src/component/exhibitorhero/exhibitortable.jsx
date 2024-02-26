"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Button, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";

import { useState } from "react";

import {columns, vals} from "./data";
import styles from "./exhibitorcard.module.css";



export default function ExhibitorTable() {
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [showModal, setShowModal] = useState(true);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    
    switch (columnKey) {
      case "attrib":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{vals.name}</p>
          </div>
        );
      case "val":
        return (
          <div className={`{styles.tablerow} flex flex-col`}>
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{vals.name}</p>
          </div>
        );
      case "actions":
        
        return (
          <div className="relative flex items-center gap-2">

              <Button onPress={onOpen} className="bg-primary text-white h-10 px-auto" startContent={<EditIcon className="text-small" />} variant="flat">
                Edit
              </Button>
            
              <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="top-center"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Editing</ModalHeader>
                      <ModalBody>

                        <Input
                            autoFocus
                            label="Stall Name"
                            labelPlacement="outside-left"
                            placeholder="Enter the stall name"
                            variant="faded"
                        />
                        
                        
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Create
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>

          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table isStriped aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"} className="hidden">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={vals}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell className="text-lg font-semibold max-w-56 border">{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
