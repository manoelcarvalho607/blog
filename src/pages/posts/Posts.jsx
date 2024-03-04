/* eslint-disable react-hooks/exhaustive-deps */
import "./postpage.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { blog } from '../../data/data';

export const Posts = () => {
    const { id } = useParams()
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))
        if (blogs) {
            setBlogs(blogs)
        }
    }, [])


    return (
        <>
            {blogs ? (
                <section className='singlePage'>
                    <div className='container'>
                        <div className='left'>
                            <img src={blogs.cover} alt='' />
                        </div>
                        <div className='right'>
                            <div className='buttons'>
                                <button className='button'>
                                    <BsPencilSquare />
                                </button>
                                <button className='button'>
                                    <AiOutlineDelete />
                                </button>
                            </div>
                            <h1>{blogs.title}</h1>
                            <p>{blogs.desc}</p>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    )
}