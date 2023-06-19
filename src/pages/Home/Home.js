import React, { useEffect, useState } from 'react'
import MyNavbar from '../../components/navbar/MyNavbar'
import ArticleItem from '../../components/article/ArticleItem'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(response => setArticles(response.data))
  }, [])
  return (
    <>
      <MyNavbar />
      <Container>
        <h1 style={{ marginTop: '30px' }}>لیست مقالات</h1>
        <Row className='gy-4 py-3'>
          {articles.map(article => (
            <Col key={article.id}>
              <ArticleItem {...article}  />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home