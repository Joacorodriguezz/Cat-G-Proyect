import { ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://as01.epimg.net/meristation/imagenes/2015/06/03/noticia/1433346420_798969_1532451998_portada_normal.jpg" />
      <Card.Body>
        <Card.Title>Producto 1</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam a neque vitae repellendus eum quidem repellat dolorum facere quos sunt consequuntur commodi vel, ea doloribus ullam minima consectetur excepturi.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

