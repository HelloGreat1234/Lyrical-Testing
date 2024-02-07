import Navbar from "./components/navbar"
import FrontPage from "./components/Intro"
import Explanation from "./components/explain"


export default function home() {

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