import divider from "../assets/images/rectangle-3.png"
import newsHacker from "../assets/images/computer-hack.png"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "../Components/Card"
import { Link } from "react-router-dom"

const NewsList = () => {
    const apiKey = "df6e00a661d24f67a8159bdf32c461fa"

    // const query = "everything?q=tesla&from=2023-10-01&sortBy=popularity&"
    const query = "top-headlines?country=id&category=technology&"

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
        <section>
            <div className="row my-2">
                <div className="col-md">
                    <div className="container">
                        <div className="row">
                            <h1 className="text-center mt-5">Latest News List</h1>
                            <div className="col-md text-center">
                                <img src={divider} alt="" />
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
                            {articles.map((article) => {
                                const img = article.urlToImage != null ? article.urlToImage : newsHacker;
                                const title = article.title
                                const description = article.description != null ? article.description : "Tidak Ada Keterangan"

                                return (
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={img} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{title}</h5>
                                                <p className="card-text">{description}</p>
                                            </div>
                                            <div className="card-footer">
                                                <Link to="/">
                                                    <span className="btn btn-sm btn-light text-secondary">Baca Selengkapnya</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsList