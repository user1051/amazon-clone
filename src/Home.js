import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGreatEscapistsS1/TGET_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB660604320_.jpg" alt=""/> */}
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            <div className="home__row">
            <Product
            id="1234"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            />
            <Product
            id="1234"
            title="KUPPET Stand Mixer, 8-Speed Tilt-Head Electric Food Stand Mixer with Dough Hook, Wire Whip & Beater, Pouring Shield, 4.7QT Stainless Steel Bowl (Red)"
            price={80.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71l3Y6z3TIL._AC_UY218_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="1234"
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Petal/Copper Rose, One Size (S and L Bands Included)"
            price={179}
            rating={5}
            image="https://m.media-amazon.com/images/I/61iqvrkk3nL._AC_UY218_.jpg"
            />
             <Product
            id="1234"
            title="All-new Echo Dot (4th generation) International Version | Smart speaker with Alexa | Charcoal"
            price={99.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UY218_.jpg"
            />
            <Product
            id="1234"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={1028.92}
            rating={5}
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UL320_.jpg"
            />
            </div>
             <div className="home__row">
            <Product
            id="1234"
            title="Samsung C49J890DKN, CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty"
            price={296.45}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg"
            />
            </div>
        </div>
    )
}

export default Home
