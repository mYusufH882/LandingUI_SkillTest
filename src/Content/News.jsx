import divider from '../assets/images/rectangle-3.png'
import newsHacker from '../assets/images/computer-hack.png'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

const News = () => {
    const apiKey = "df6e00a661d24f67a8159bdf32c461fa"

    // const query = "everything?q=tesla&from=2023-10-01&sortBy=popularity&"
    const query = "top-headlines?country=id&pageSize=3&category=technology&"

    const url = "https://newsapi.org/v2/" + query + "apiKey=" + apiKey

    const [articles, setArticles] = useState([])

    const fetchArticles = async () => {
        const response = await axios.get(url);
        setArticles(response.data.articles)
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    return (
        <section className="my-4">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="container">
                        <div className="row">
                            <h1 className="text-center mt-5">Latest New</h1>
                            <div className="col-md text-center">
                                <img src={divider} alt="" />
                            </div>
                            <p className="text-secondary my-3">At elKopra we are committed to providing top-notcto cater to
                                all
                                your
                                needs. Our team of
                                dedicated professionals is passionate about delivering exceptional solutions that exceed
                                expectations.</p>
                        </div>

                        <div className="row justify-content-center row-cols-1 row-cols-md-3 g-4 my-3">
                            <div className="col-md-12">
                                <div className="card-group">
                                    {articles.map((article) => (
                                        <Card key={article.id} title={article.title} image={article.urlToImage != null ? article.urlToImage : newsHacker} description={article.description} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md text-center">
                                <Link to="/news-list">
                                    <span href="#" className="btn btn-primary btn-sm mt-5">Baca Selengkapnya...</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default News