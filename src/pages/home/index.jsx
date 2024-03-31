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
            <h2><i class="fa-solid fa-map-location"></i> New Launch Property in  Mumbai for Sale/Rent</h2>
            <div className="card-section-homes">


                <div className="home-card">
                    <div className="room-img-sec">
                        <div className="room-tag"><span ><i class="fa-solid fa-check"></i>Verified</span><span><i class="fa-regular fa-heart"></i></span></div>
                        <img className="home-img" src="https://newprojects.99acres.com/projects/shree_ashapura_realtors/shree_samarth_aura/images/hvmq23u_1709224810_476725078_med.jpg" alt="" />
                    </div>
                    <div className="rooms-desp">
                        <h3> <span>Raunak Niwas</span></h3>
                        <p>01, Ganesh Yadav Chawl, Farid Nagar, Bhandup(w) 400078</p>
                        <div className="price-inline">
                            <div className="rooms-border">Rs 14000<h6>Rent</h6></div>
                            <div className="rooms-border">550 sq.ft</div>
                        </div>
                        <div className="room-highness"><span> Near to station</span></div>
                    </div>
                </div>
                <div className="home-card">
                    <div className="room-img-sec">
                        <div className="room-tag"><span ><i class="fa-solid fa-check"></i>Verified</span><span><i class="fa-regular fa-heart"></i></span></div>
                        <img className="home-img" src="https://newprojects.99acres.com/projects/shree_ashapura_realtors/shree_samarth_aura/images/hvmq23u_1709224810_476725078_med.jpg" alt="" />
                    </div>
                    <div className="rooms-desp">
                        <h3> <span>Raunak Niwas</span></h3>
                        <p>01, Ganesh Yadav Chawl, Farid Nagar, Bhandup(w) 400078</p>
                        <div className="price-inline">
                            <div className="rooms-border">Rs 14000<h6>Rent</h6></div>
                            <div className="rooms-border">550 sq.ft</div>
                        </div>
                        <div className="room-highness"><span> Near to station</span></div>
                    </div>
                </div>
                <div className="home-card">
                    <div className="room-img-sec">
                        <div className="room-tag"><span ><i class="fa-solid fa-check"></i>Verified</span><span><i class="fa-regular fa-heart"></i></span></div>
                        <img className="home-img" src="https://newprojects.99acres.com/projects/shree_ashapura_realtors/shree_samarth_aura/images/hvmq23u_1709224810_476725078_med.jpg" alt="" />
                    </div>
                    <div className="rooms-desp">
                        <h3> <span>Raunak Niwas</span></h3>
                        <p>01, Ganesh Yadav Chawl, Farid Nagar, Bhandup(w) 400078</p>
                        <div className="price-inline">
                            <div className="rooms-border">Rs 14000<h6>Rent</h6></div>
                            <div className="rooms-border">550 sq.ft</div>
                        </div>
                        <div className="room-highness"><span> Near to station</span></div>
                    </div>
                </div>
                <div className="home-card">
                    <div className="room-img-sec">
                        <div className="room-tag"><span ><i class="fa-solid fa-check"></i>Verified</span><span><i class="fa-regular fa-heart"></i></span></div>
                        <img className="home-img" src="https://newprojects.99acres.com/projects/shree_ashapura_realtors/shree_samarth_aura/images/hvmq23u_1709224810_476725078_med.jpg" alt="" />
                    </div>
                    <div className="rooms-desp">
                        <h3> <span>Raunak Niwas</span></h3>
                        <p>01, Ganesh Yadav Chawl, Farid Nagar, Bhandup(w) 400078</p>
                        <div className="price-inline">
                            <div className="rooms-border">Rs 14000<h6>Rent</h6></div>
                            <div className="rooms-border">550 sq.ft</div>
                        </div>
                        <div className="room-highness"><span> Near to station</span></div>
                    </div>
                </div>
                <div className="home-card">
                    <div className="room-img-sec">
                        <div className="room-tag"><span ><i class="fa-solid fa-check"></i>Verified</span><span><i class="fa-regular fa-heart"></i></span></div>
                        <img className="home-img" src="https://newprojects.99acres.com/projects/shree_ashapura_realtors/shree_samarth_aura/images/hvmq23u_1709224810_476725078_med.jpg" alt="" />
                    </div>
                    <div className="rooms-desp">
                        <h3> <span>Raunak Niwas</span></h3>
                        <p>01, Ganesh Yadav Chawl, Farid Nagar, Bhandup(w) 400078</p>
                        <div className="price-inline">
                            <div className="rooms-border">Rs 14000<h6>Rent</h6></div>
                            <div className="rooms-border">550 sq.ft</div>
                        </div>
                        <div className="room-highness"><span> Near to station</span></div>
                    </div>
                </div>

            </div>

        </div>
        <div className="easy-acces">
            <div className="find-property">
                <h5>Find Property</h5>
                <div>Select from thousands of options, effortlessly </div>
                <button>Find Now</button>
            </div>

            <div className="find-property">
                <h5>List your Property</h5>
                <p>For free. Without any brokerage </p>
                <button>Find Now</button>
            </div>
        </div>
    </>
}
export default Home