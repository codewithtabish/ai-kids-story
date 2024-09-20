import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function StoryModal({ loader }: { loader: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  // Add 'onOpen' to the dependency array to avoid the warning
  useEffect(() => {
    onOpen();
  }, [onOpen]); // <-- Include onOpen here

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      {loader && (
        <Modal isOpen={true} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Story Creation
                </ModalHeader>
                <ModalBody>
                  <div className="flex justify-center items-center w-full py-10">
                    <div className="w-6 h-6 animate-spin transition-all rounded-md duration-500 spinner  border-gray-800 dark:border-gray-50 border-2"></div>
                    {/* <p>wait while story is being created</p> */}
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
