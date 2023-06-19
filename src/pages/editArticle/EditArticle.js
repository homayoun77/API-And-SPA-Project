import axios from 'axios'
import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import MyNavbar from '../../components/navbar/MyNavbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

function EditArticle() {

  const [articleData , setArticleData] = useState({})
  const articleId = useParams().articleId

  useEffect(() => {
    axios.get(`http://localhost:5000/articles/${articleId}`)
    .then(response => setArticleData(response.data))
  }, [articleId])
  
  const editArticleHandler = () => {
    axios.put(`http://localhost:5000/articles/${articleId}` , articleData)
    Swal.fire({
      title : 'مقاله با موفقیت ویرایش شد',
      timer : 2000,
      timerProgressBar : true
    })
  }

  const formHandler = (e) => {
    setArticleData({...articleData , [e.target.name] : e.target.value})
  }

  return (
    <>
      <MyNavbar />
      <div className='form-container'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control value={articleData.title} name='title' onChange={formHandler} type="text" placeholder="عنوان مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control value={articleData.desc} name='desc' onChange={formHandler} type="text" placeholder="یک توضیح کوتاه برای مقاله وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control value={articleData.writer} name='writer' onChange={formHandler} type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control value={articleData.category} name='category' onChange={formHandler} type="text" placeholder="موضوع مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control value={articleData.image} name='image' onChange={formHandler} type="text" placeholder="آدرس عکس مقاله را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control value={articleData.readingTime} name='readingTime' onChange={formHandler} type="number" />
          </Form.Group>
          <Button onClick={editArticleHandler} variant="primary" type="button">
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  )
}

export default EditArticle