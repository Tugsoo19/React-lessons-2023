import { Link } from "react-router-dom";

export default function Index() {
    // const aboutPageData ={
    //     from: "Index",
    //     message: "Welcome to About Page",
    //     timestamp: Date.now()
    // }

    // const homePageData = {
    //     from: "Index",
    //     message: "Welcome to About Page",
    //     timestamp: Date.now()
    // }

    return (
        <div>
            <h1>Day-45 Dynamic Routes</h1>
            <div className="nav">
               
               
                <Link to={'./accordion'}>Accordion page</Link>
               
            </div>

        </div>
    )
}