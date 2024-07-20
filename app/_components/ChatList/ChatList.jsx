import Image from "next/image";
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Container,
  Stack,
} from "react-bootstrap";

import { BsDot } from "react-icons/bs";
import "./styles.css";
const ChatList = () => {
  return (
    <>
      <Container
        className={`chat_list_container px-0 border rounded border-secondary`}
      >
        <Card className={`text-bg-dark sticky-top h-100`}>
          <CardBody className={`px-0`}>
            <CardHeader>Chats</CardHeader>

            {/* Vertical */}
            <Stack className={`mh-100`}>
              {/* chat */}
              <Stack
                direction="horizontal"
                gap={2}
                className={` border-secondary border-3 border-bottom p-2 mx-2 justify-content-between`}
              >
                <Stack
                  direction="horizontal"
                  gap={2}
                  className={`align-items-start`}
                >
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1721152839656-3e13e2ceef29?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    width={50}
                    height={50}
                    className={`object-fit-cover rounded-circle`}
                  />
                  <Stack>
                    <CardSubtitle>user name</CardSubtitle>
                    <span className={`small text-secondary`}>hello </span>
                  </Stack>
                </Stack>
                <BsDot size={35} color="green" />
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default ChatList;
