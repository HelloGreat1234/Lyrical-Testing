import Navbar from "./components/navbar"
import FrontPage from "./components/Intro"
import Explanation from "./components/explain"


const Home = () => {

    return (
        <div >
            <Navbar />
            <div className="px-5">

            <FrontPage/>
            <Explanation/>
            </div>
        </div>
    )
}

export default Home;