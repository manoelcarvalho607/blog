/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */

import "./category.css";
import { category } from '../../data/data';




function Category() {

   
    return (
        <section className="category">
            <div className="content">
        
                {category.map((item) => (
                    <div className='boxs'>
                        <div className='box' key={item.id}>
                            <img src={item.cover} alt="cover"/>
                            <div className='overlay'>
                                <h4>{item.category}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category;