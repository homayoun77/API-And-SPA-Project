import React, { useState } from 'react'
import MyNavbar from '../../components/navbar/MyNavbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from 'axios';
import Swal from 'sweetalert2';

function AddArticle() {

  // const [title , setTitle] = useState('')
  // const [desc , setDesc] = useState('')
  // const [writer , setWriter] = useState('')
  // const [category , setCategory] = useState('')
  // const [image , setImage] = useState('')
  // const [readingTime , setReadingTime] = useState('')

  const [formData , setFormData] = useState({})

  const resetFormData = () => {
    setFormData({
      title : '',
      category : '',
      writer : '',
      readingTime : '',
      image : '',
      desc : ''
    })
  }

  const addArticleHandler = () =>{
    // axios.post('http://localhost:5000/articles' , {

    // title : title,
    // desc : desc,
    // writer : writer,
    // category : category,
    // image : image,
    // readingTime : readingTime,

    // })

    axios.post('http://localhost:5000/articles' , formData )
    .then(response => {
      if(response.status === 201){
        Swal.fire({
          title : 'مقاله با موفقیت ساخته شد',
          timer : 2000,
          timerProgressBar : true
        })
      }
    })

    .catch(error => {
      Swal.fire({
        title : 'مقاله ساخته نشد',
        timer : 2000,
        timerProgressBar : true,
        icon : 'error'
      })
    })

    resetFormData()
  }

  const formHandler = (e) => {
    setFormData({...formData , [e.target.name] : e.target.value})
  }

  // const titleHandler = (e) => {
  //     setTitle(e.target.value)
  // }

  // const descHandler = (e) => {
  //   setDesc(e.target.value)
  // }

  // const writerHandler = (e) => {
  //   setWriter(e.target.value)
  // }

  // const categoryHandler = (e) => {
  //   setCategory(e.target.value)
  // }

  // const imageHandler = (e) => {
  //   setImage(e.target.value)
  // }

  // const readingTimHandler = (e) => {
  //   setReadingTime(e.target.value)
  // }
  
  return (
    <>
      <MyNavbar />
      <div className='form-container'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control value={formData.title} name='title' onChange={formHandler} type="text" placeholder="عنوان مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control value={formData.desc} name='desc' onChange={formHandler} type="text" placeholder="یک توضیح کوتاه برای مقاله وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control value={formData.writer} name='writer' onChange={formHandler} type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control value={formData.category} name='category' onChange={formHandler} type="text" placeholder="موضوع مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control value={formData.image} name='image' onChange={formHandler} type="text" placeholder="آدرس عکس مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control value={formData.readingTime} name='readingTime' onChange={formHandler} type="number" />
          </Form.Group>
          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  )
}

export default AddArticle