import ProductCard from '../../components/product-card/product-card.component';

import WAREHOUSE from '../../utils/database/database';

const CategoryCard = ({ categoryToDisplay }) => {
  const getCategoryToDisplay = (category) => {
    const result = WAREHOUSE.filter((item) => item.category === category);

    return result[0]
  };

  return (
    <div className='shop-container'>
      {
        getCategoryToDisplay(categoryToDisplay).products.map((product) => {
          return <ProductCard key={product.id} product={product}/>
        })
      }
    </div>
  )
}

export default CategoryCard;
