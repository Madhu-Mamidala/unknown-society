import { Container, Stack } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

const TopHeader = () => {
  return (
    <>
      <Container className="bg-black shadow-lg rounded p-3">
        <Stack direction="horizontal" gap={2} className={``}>
          <Container className={`text-light `}>
            <span className={`fw-bold`}>UNKNOWN SOCIETY</span>
          </Container>
          <Stack direction="horizontal" gap={2} className={`ms-auto`}>
            <span className="small d-none d-lg-block">userName</span>
            <BsFillPersonFill size={23} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default TopHeader;
