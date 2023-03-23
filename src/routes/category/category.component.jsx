import {  Fragment } from 'react';
import { useParams } from 'react-router-dom';

import WAREHOUSE from '../../utils/database/database';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();

  const products = WAREHOUSE.filter((category => category.title === category))

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Category;
