import Feedback from "../Content/Feedback"
import Jumbotron from "../Content/Jumbotron"
import News from "../Content/News"

function Body() {
    return (
        <div>
            <Jumbotron />
            <News />
            <Feedback />
        </div>
    )
}

export default Body