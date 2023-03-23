import CategoryPreview from '../../components/category-preview/category-preview.component';

import WAREHOUSE from '../../utils/database/database';

const CategoriesPreview = () => {
  return (
     <div className='shop-container'>
      {
        WAREHOUSE.map((categories) => {
          return (
            <CategoryPreview
              key={categories.title}
              title={categories.title}
              products={categories.items}
            />)
        })
      }
    </div>
  )
}

export default CategoriesPreview;
