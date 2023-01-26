import { Link } from "react-router-dom";

export default function Index() {
    const aboutPageData ={
        from: "Index",
        message: "Welcome to About Page",
        timestamp: Date.now()
    }

    const homePageData = {
        from: "Index",
        message: "Welcome to About Page",
        timestamp: Date.now()
    }

    return (
        <div>
            <h1>Day-44 Dynamic Routes</h1>
            <div className="nav">
                <Link to={'./about'} state={aboutPageData}>About page</Link>
                <Link to={'./home'} state={homePageData}>Home page</Link>
                <Link to={'./accordion'}>Accordion page</Link>
                <Link to={'./movies'}>Movies Page</Link>
                <Link to={'./gallery'}>Image Gallery Page</Link>
                <Link to={'./toaster'}>Toaster Page</Link>
            </div>

        </div>
    )
}