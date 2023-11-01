import divider from '../assets/images/rectangle-3.png'
import newsHacker from '../assets/images/computer-hack.png'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const News = () => {
    const apiKey = "df6e00a661d24f67a8159bdf32c461fa"

    // const query = "everything?q=tesla&from=2023-10-01&sortBy=popularity&"
    const query = "top-headlines?country=id&pageSize=3&category=technology&"
    // const query = "top-headlines/sources?category=business"

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
        <>
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
                                            <div className="card mx-2 border">
                                                <img src={newsHacker} className="card-img-top" alt="..." />
                                                <div className="card-body" key={article.id}>
                                                    <h5 className="card-title">{article.title}</h5>
                                                    <p className="card-text text-secondary">
                                                        <small>
                                                            {article.description != null ? article.description : "Tidak Ada Keterangan"}
                                                        </small>
                                                    </p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="#" className="btn btn-light text-secondary">Learn More...</a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md text-center">
                                    <a href="#" className="btn btn-primary btn-sm">Read More</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default News