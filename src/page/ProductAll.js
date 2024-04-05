import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import {Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reduce/productReduer';

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    dispatch(fetchProducts(searchQuery));
  }

  useEffect(() => {
    getProducts();
  },[query])

  return (
    <div>
      <Container>
        <Row>
        {productList.map((item)=> (
                      <Col lg={3}>
                      <ProductCard item={item} />
                    </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll