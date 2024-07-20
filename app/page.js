import { Col, Container, Row } from "react-bootstrap";
import ChatList from "./_components/ChatList/ChatList";
import ChatBox from "./_components/ChatBox/ChatBox";

export default function Home() {
  return (
    <>
      <Container className={`mh-100 my-2 px-0`}>
        <Row className={`p-0 g-0`}>
          <Col sm={12} lg={4} className={`px-0`}>
            <ChatList />
          </Col>
          <Col sm={8} className={`d-none d-lg-block`}>
            <ChatBox />
          </Col>
        </Row>
      </Container>
    </>
  );
}
