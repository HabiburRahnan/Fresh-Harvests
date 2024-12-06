import AboutUs from "../../Components/AboutUs"
import Background from "../../Components/Background"
import Products from "../../Components/OurProducts/OurProducts"
import SeasonalBanner from "../../Components/SeasonalBanner"
import Navbar from "../../Sheard/Navbar"

function Home() {
    return (
        <div>
            <div className="bg-[#DCFCE7] ">
                <Navbar />
                <Background />
            </div>
            <Products />
            <AboutUs />
            <SeasonalBanner />
        </div>
    )
}

export default Home