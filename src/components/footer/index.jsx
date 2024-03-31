import React from "react";
import "./footer.css"
const Footer=()=>{
    return <>
    <div className="footer">
        <div className="footer-up">
            <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
                <li>FAQs</li>

            </ul>
        </div>
        <div className="footer-down">
            <div className="download">
                <img src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="" />
                <img src="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png" alt="" />
            </div>
            <p>&copy; 2023-1034 Gets-Flat Technologies Solution Pvt. Ltd.</p>
        </div>
    </div>
    </>
}
export default Footer;