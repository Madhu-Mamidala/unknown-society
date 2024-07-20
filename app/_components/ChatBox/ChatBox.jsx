import Image from "next/image";
import { BsThreeDots, BsSendArrowUp } from "react-icons/bs";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import "./style.css";

const ChatBox = () => {
  return (
    <>
      <Container className={`chat_container`}>
        <Card className={`text-bg-dark`}>
          <CardBody className={`p-0`}>
            <CardHeader className={` sticky-top p-0`}>
              <div className={`bg-black rounded`}>
                {/* Chat Header */}
                <Stack
                  direction="horizontal"
                  className={`justify-content-between p-2`}
                >
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1721152839656-3e13e2ceef29?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    width={50}
                    height={50}
                    className={`object-fit-cover rounded-circle`}
                  />
                  <CardText>user name</CardText>
                  <Button size="sm" variant="outline-secondary">
                    <BsThreeDots />
                  </Button>
                </Stack>
              </div>
            </CardHeader>
            {/* Chat Header */}
            {/* chat  */}
            <Container className={`h-100`}>
              <Stack direction="horizontal">
                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
                <p className={`message rounded px-2 mt-2`}>Hi</p>
              </Stack>

              <Stack direction="horizontal">
                <p className={`message rounded ms-auto px-2`}>Hello</p>

                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
              </Stack>
              <Stack direction="horizontal">
                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
                <p className={`message rounded px-2 mt-2`}>Hi</p>
              </Stack>

              <Stack direction="horizontal">
                <p className={`message rounded ms-auto px-2`}>Hello</p>

                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
              </Stack>
              <Stack direction="horizontal">
                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
                <p className={`message rounded px-2 mt-2`}>Hi</p>
              </Stack>

              <Stack direction="horizontal">
                <p className={`message rounded ms-auto px-2`}>Hello</p>

                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
              </Stack>
              <Stack direction="horizontal">
                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
                <p className={`message rounded px-2 mt-2`}>Hi</p>
              </Stack>

              <Stack direction="horizontal">
                <p className={`message rounded ms-auto px-2`}>Hello</p>

                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
              </Stack>
              <Stack direction="horizontal">
                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
                <p className={`message rounded px-2 mt-2`}>Hi</p>
              </Stack>

              <Stack direction="horizontal">
                <p className={`message rounded ms-auto px-2`}>Hello</p>

                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
              </Stack>
              <Stack direction="horizontal">
                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
                <p className={`message rounded px-2 mt-2`}>Hi</p>
              </Stack>

              <Stack direction="horizontal">
                <p className={`message rounded ms-auto px-2`}>Hello</p>

                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
              </Stack>
              <Stack direction="horizontal">
                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
                <p className={`message rounded px-2 mt-2`}>Hi</p>
              </Stack>

              <Stack direction="horizontal">
                <p className={`message rounded ms-auto px-2`}>Hello</p>

                <Image
                  src={`https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  width={30}
                  height={30}
                  className={`object-fit-cover rounded-circle`}
                />
              </Stack>
            </Container>

            {/* chat  */}
            {/* Input */}
            <div className="sticky-bottom  ">
              <InputGroup>
                <FormControl
                  placeholder="enter message...."
                  className={`bg-black border border-secondary `}
                />
                <Button variant="secondary" size="sm">
                  <BsSendArrowUp />
                </Button>
              </InputGroup>
            </div>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default ChatBox;
