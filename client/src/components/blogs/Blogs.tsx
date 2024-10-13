import './blog.css'
const Blogs = () => {
  return (
 <div className=" section container-gray">
     <div className='container section-padding'>
        <h1 style={{color:"#333"}}>About microgreens...</h1>
        <div className="blogs">
            <div className="blog">
                <img src="https://avatars.dzeninfra.ru/get-zen_doc/9505890/pub_6430d44d006c795e05e55802_6430d46c34531801e9b23509/scale_1200" alt="" />
                <div className="title">
                  Health benefits of microgreens
                </div>
                <p>Microgreens contain more vitamins, minerals, and antioxidants than mature vegetables. They are rich in vitamins C, E, and K, as well as folic acid. The antioxidants in microgreens help protect cells from damage, supporting the immune system and reducing the risk of diseases. </p>
            </div>
            <div className="blog">
                <img src="https://micropod.nz/cdn/shop/articles/the_history_of_1200x1200.png?v=1710286233" alt="" />
                <div className="title">
                History of microgreens</div>
                <p>
Microgreens began their history in the 1980s in the United States, when chefs began using them to garnish dishes. They originally appeared as an element of gastronomic art in upscale restaurants.
 In the early 2000s, they began to be grown on small farms and in urban settings.</p>
            </div>
            <div className="blog">
                <img src="https://food.pibig.info/uploads/posts/2023-03/thumbs/1679014759_food-pibig-info-p-salat-s-mikrozelenyu-gorokha-pinterest-69.jpg" alt="" />
                <div className="title">Microgreens & regular vegetables</div>
                <p>          
Microgreens contain several times more vitamins, minerals and antioxidants compared to mature vegetables. For example, they may be rich in vitamins C, E and K.
                Microgreens often have a brighter, richer flavor, making them a great addition to salads and other dishes.
                </p>
            </div>
        </div>
    </div>
    <hr />
 </div>
  )
}

export default Blogs