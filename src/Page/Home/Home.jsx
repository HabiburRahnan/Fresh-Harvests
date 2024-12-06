import AboutUs from "../../Components/AboutUs"
import Background from "../../Components/Background"
import OurBlog from "../../Components/OurBlog"
import Products from "../../Components/OurProducts/OurProducts"
import SeasonalBanner from "../../Components/SeasonalBanner"
import Services from "../../Components/Services"
import Testimonial from "../../Components/Testimonial"
// import Navbar from "../../Sheard/Navbar"

function Home() {
    return (
        <div>
            <div className="bg-[#DCFCE7] ">
             
                <Background />
            </div>
            <Products />
            <AboutUs />
            <SeasonalBanner />
            <Testimonial />
            <OurBlog></OurBlog>
            <Services/>
        </div>
    )
}

export default Home