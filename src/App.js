import "./App.css";
import { Card, Button, Input } from "shuddle";

const App = () => {
  return (
    <>
      <Card kind="C1" background="#eee">
        <Card.Img accent="#888">
          <img src="me.jpeg" />
        </Card.Img>
        <Card.Body>UX Unicorn</Card.Body>
      </Card>

      <Button rounded="false" outline="false">
        Normal Solid
      </Button>

      <Input from="Detroit" to="Las Vegas" />
    </>
  );
};

export default App;
