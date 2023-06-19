import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FaArrowLeft } from 'react-icons/fa'
import './ArticleItem.css'
import { Link } from 'react-router-dom'

function ArticleItem({ id, image, title, desc, writer, readingTime }) {
    return (
        <div className='cards'>
            <div className='head'>
                <img src={image} alt="img" />
            </div>
            <div className='body'>
                <p className='title'>{title}</p>
                <p className='desc'> {desc} </p>
                <Link to={`/article/${id}`}>
                    <div className='read-more'>
                        <span>ادامه مقاله</span>
                        <FaArrowLeft />
                    </div>
                </Link>
            </div>
            <div className='footer'>
                <span>نویسنده : {writer}</span>
                <span> <BiTimeFive /> {readingTime} دقیقه</span>
            </div>
        </div>
    )
}

export default ArticleItem