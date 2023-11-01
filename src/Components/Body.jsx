import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Content/Home"
import NewsList from "../Content/NewsList"

function Body() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news-list" element={<NewsList />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Body