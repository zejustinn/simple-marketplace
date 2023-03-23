import { Link } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2 className='title-container'>
        <Link to={title.toLowerCase()} className='title'>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>
        {
          products
            .filter((_, index) => index < 4)
            .map((product) => {
              return (<ProductCard key={product.id} product={product} />)
            })
        }
      </div>
    </div>
  )
}

export default CategoryPreview;
