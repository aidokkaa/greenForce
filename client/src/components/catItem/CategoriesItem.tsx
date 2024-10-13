import './categoriesItem.css'
import { Link } from 'react-router-dom'
import {Item} from '../catalog/Category'

const CategoriesItem = ({item}:{item:Item}) => {
  return (
  
            <Link to={`products/${item.cat}`}>
            <div className="item">
                <img src={item.img} alt="" />
                <p>{item.title}</p>
            </div>
            </Link>
           
  )
}

export default CategoriesItem