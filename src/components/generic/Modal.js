import React, { useState } from 'react';
import {
  Modal as ReactstrapModal,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import { sendSms } from '../../utils/apiCaller';

const Modal = ({ name }) => {
  const [otp, setOtp] = useState(null);
  const [modalState, setState] = useState(false);
  const msg = `Hi, Your OTP is ${otp}`;

  const toggle = () => {
    if (!modalState) {
      setOtp(Math.floor(100000 + Math.random() * 900000));
    }
    setState(!modalState);
  };

  const sendMessage = async () => {
    toggle();
    const message = { from: '+13862676553', to: '+919529593182', body: msg, name };
    await sendSms(message);
  };

  return (
    <>
      <Button onClick={toggle} color="primary" className="mt-4"> Send Message </Button>
      <ReactstrapModal isOpen={modalState} toggle={toggle}>
        <ModalHeader> Send Message </ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText> Hi, Your OTP is {otp} </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={sendMessage}> Send </Button>
          <Button color="secondary" onClick={toggle}> Cancel </Button>
        </ModalFooter>
      </ReactstrapModal>
    </>
  );
};

export default Modal;
