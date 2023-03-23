import { useNavigate } from 'react-router-dom';

import './category.styles.scss'

const Category = ({ category: { title, imageUrl, path } }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/' + path)
  }

  return (
    <div className="category-container" onClick={navigateHandler}>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="category-inner-box">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
  
      {/* <div className='category-container'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div> */}
    </div>
  )
}

export default Category;
