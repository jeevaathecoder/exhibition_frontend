"use client"

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">Create new stall</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Please insert stall details</ModalHeader>
              <ModalBody>

                <Input
                    autoFocus
                    label="Stall Name"
                    labelPlacement="outside-left"
                    placeholder="Enter the stall name"
                    variant="faded"
                />
                <Input
                    autoFocus
                    label="Stall Detail"
                    labelPlacement="outside-left"
                    placeholder="Enter the stall detail"
                    variant="faded"
                />
                <Input
                    autoFocus
                    label="Image URL:"
                    labelPlacement="outside-left"
                    placeholder="Enter URL for the stall image"
                    variant="faded"
                />
                <Input
                    autoFocus
                    label="Video URL"
                    labelPlacement="outside-left"
                    placeholder="Enter URL for the stall video"
                    variant="faded"
                />
                <Input
                    autoFocus
                    label="Brochure URL"
                    labelPlacement="outside-left"
                    placeholder="Enter URL for the stall Brochure"
                    variant="faded"
                />
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Clear
                </Button>
                <Button color="primary" onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
