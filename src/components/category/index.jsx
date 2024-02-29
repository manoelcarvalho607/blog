/* eslint-disable react/jsx-key */
import "./category.css";
// import { category } from '../../data/data';




function Category() {

    const category = [
        {
            id: 1,
            category: "Ciência",
            title: "Moléculas de água",
            cover: "../../data/images/01.jpg",
        },
        {
            id: 2,
            category: "Ciência",
            title: "Células",
            cover: "../../data/images/02.jpg",
        }
    ]
    return (
        <section className="category">
            <div className="content">

                {category.map((item) => (
                    <div className='boxs'>
                        <div className='box' key={item.id}>
                            <img src={item.cover} alt='cover' />
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