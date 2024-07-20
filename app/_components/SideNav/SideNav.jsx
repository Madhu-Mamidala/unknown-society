import React from "react";
import { Container, Stack } from "react-bootstrap";
import { BsChatDots, BsPerson } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";

const SideNav = () => {
  return (
    <>
      <Container className={`h-100  rounded px-4 py-5 `}>
        <Stack
          className={`h-100 p-2 d-flex flex-column align-items-center   flex-wrap`}
          gap={3}
          direction="vertical"
        >
          <BsChatDots size={26} className={`mb-3`} />
          <IoChatbubbles size={26} className={`mb-3`} />
          <Stack
            className={`p-2 flex-column align-items-center justify-content-end flex-wrap`}
          >
            <BsPerson size={26} className={`mb-3 `} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default SideNav;
