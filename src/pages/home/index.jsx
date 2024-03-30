import React from "react";
import "./home.css"
// import { useNavigate } from "react-router-dom";
const Home = () => {
    const handleLocation = () => {
        return <>

        </>
    }
    return <>
        <div className="target">
            <ul>
                <li><i class="fa-solid fa-house-circle-check"></i>Buy</li>
                <li><i class="fa-solid fa-truck-moving"></i>Rent</li>
                <li><i class="fa-solid fa-table-cells"></i>Plot/Land</li>
                <li><i class="fa-solid fa-house-user"></i><span>Post a property</span></li>
            </ul>
        </div>
        <div className="home">
            {/* <img src="https://www.providenthousing.com/wp-content/uploads/2023/01/hero-banner.webp" className="banner-image" alt="" /> */}
            <div className="text">
                <h1>Buying <span className="head-and">&</span> Selling</h1>
                <p className="text-para">Unlock Your Dream Home: Where Flats Find Their Perfect Match!</p>
                <button className="banner-button" > More About</button>
                <ul>
                    <li><i className="fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                    <li><i className="fa-brands fa-whatsapp"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                </ul>
            </div>
        </div>
        <div className="home-middle">
            <div><span className="input-sec"><input className="local-input" type="text" placeholder="Search by locality or landmark" /><i class="fa-solid fa-location-crosshairs" onClick={handleLocation}></i><i class="fa-solid fa-magnifying-glass" ></i></span></div>
            <div className="highlights">
                <h2>Apartments, Villas and more</h2>
                <div className="card-section">
                    <div className="high-card">
                        <div className="high-image">
                            <img src="https://res.cloudinary.com/sentral/image/upload/w_1000,h_1000,q_auto:eco,c_fill/f_auto/v1684782440/miro_hero_building_exterior_2000x1125.jpg" alt="" />

                        </div>
                        <div className="high-card-desp">
                            <h3>Residential Apartments</h3>
                            <p>10,000+ Properties</p>
                        </div>
                    </div>
                    <div className="high-card">
                        <div className="high-image">
                            <img src="https://tjh.com/wp-content/uploads/2023/04/denver-new-home-Meade2.webp" alt="" />

                        </div>
                        <div className="high-card-desp">
                            <h3>Independent House/ Villa</h3>
                            <p>900+ Properties</p>
                        </div>
                    </div>
                    <div className="high-card">
                        <div className="high-image">
                            <img src="https://5.imimg.com/data5/FD/BL/MY-11964470/residential-plots-500x500.jpg" alt="" />

                        </div>
                        <div className="high-card-desp">
                            <h3>Residential Land</h3>
                            <p>60+ Properties</p>
                        </div>
                    </div>
                    <div className="high-card">
                        <div className="high-image">
                            <img src="https://www.redfin.com/blog/wp-content/uploads/2022/11/farmhouse-1.jpg" alt="" />

                        </div>
                        <div className="high-card-desp">
                            <h3>Farm House</h3>
                            <p>12+ Properties</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <div className="home-lower-middle">
            <h2><i class="fa-solid fa-map-location"></i> New Launch Property in  Mumbai for Sale</h2>
            <div className="card-section">
                <div className="home-card">
                    <div className="img">
                        {/* carosel  Bootstrap*/}
                        <div id="carouselExampleInterval"  class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="https://newprojects.99acres.com/projects/shree_ashapura_realtors/shree_samarth_aura/images/hvmq23u_1709224810_476725078_med.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="https://newprojects.99acres.com/projects/shree_ashapura_realtors/shree_samarth_aura/images/4totmny_1709224811_476725082_med.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://newprojects.99acres.com/projects/shree_ashapura_realtors/shree_samarth_aura/images/8x0eyon_1697699127_451908058_med.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        {/* caaurosel end */}
                    </div>
                    <div className="rooms-desp">
                       <h3> <span>Raunak Niwas</span></h3>
                        <p>01, Ganesh Yadav Chawl, Farid Nagar, Bhandup(w)</p>
                        <div className="price-inline">
                            <div className="rooms-border">Rs 14000<h6>Rent</h6></div>
                            <div>550 sq.ft</div>
                        </div>
                            <div>Near to station</div>
                    </div>
                </div>

            </div>

        </div>

    </>
}
export default Home