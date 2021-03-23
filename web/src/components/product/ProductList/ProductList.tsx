import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export interface ProductListProps {
  products: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Row>
      {products.map((product, index) => (
        <Col className="mb-4" sm={12} md={4} key={index}>
          <Card>
            <Card.Body>
              <Card.Title>
                {product.description || product.partNumber}
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {product.description
                  ? product.partNumber
                  : 'No Description Specified'}
              </Card.Subtitle>
              <Button
                as={Link}
                block
                to={routes.product({ id: product.id })}
                variant="outline-primary"
              >
                Details
              </Button>
              <Button
                as={Link}
                block
                to={routes.editProduct({ id: product.id })}
                variant="outline-secondary"
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProductList
