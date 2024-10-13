import CategoriesItem from '../catItem/CategoriesItem'
export type Item = {
  id:number,
  img:string,
  title:string,
  cat:string
}
const categories:Array<Item> = [
  {
      id:1,
      img:"https://img.health-tehnika.ru/images/products/1/2500/676768196/semena-dlya-vyrashchivaniya-mikrozeleni-zdorovya-klad-brokkoli-50-g.jpg",
      title:"Microgreen seeds",
      cat:'micro'
  },
  {
      id:1,
      img:"https://gardenseedsmarket.com/images/watermarked/5/detailed/53/012349m.jpg",
      title:"Edible Flower Seeds",
      cat:'flower'
  },
  {
      id:1,
      img:"https://st14.stpulscen.ru/images/product/425/418/172_original.jpg",
      title:"Biological products",
      cat:'bio'
  },
  {
      id:1,
      img:"https://m.media-amazon.com/images/I/717Re2iKs2L._AC_SX679_.jpg",
      title:"Accessories",
      cat:'accessories'
  },
]
const Category = ({catalogRef}) => {
  return (
    <div ref={catalogRef} className='section container cat'>
           <div className="items">
            {categories.map(item=>(
            <>
            <CategoriesItem item = {item}/>
            </>
         ))}
            
           </div>
    </div>
  )
}

export default Category