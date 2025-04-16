import IMAGES from "../images/IMAGES";
function About() {
    return (
        <>
            <div className="container hero">
                <h1 className="text-2xl font-bold">About Us</h1>
                <p> 
                    Welcome to our e-commerce site! <br /> We offer a wide range of products for
                    all your needs. Our goal is to provide you with the best shopping
                    experience.
                    <br />
                    <br />
                    <br />
                    <a href="/gallery" className="cta-btn">Go to Gallery</a>
                </p>
            </div>    
            <div className="container">
                <div>
                    <h4>Speakers</h4>
                    <p className="space">
                    
                    Upgrade your audio experience with high-quality speakers. Designed to deliver exceptional sound clarity and depth, these speakers bring your music, movies, and games to life. With powerful bass and balanced sound reproduction, immerse yourself in immersive audio that enhances your entertainment and takes your listening experience to new heights.
                    </p>
                    <p className="space">
                    At SE, discover a wide range of speaker options to suit your personal computer setup. Whether you prefer intelligently designed wireless speakers or complete surround-sound systems, we offer various configurations to precisely match your preferences. Enjoy quality audio that enhances your PC experience, immersed in rich sound and immersive entertainment.
                    </p>  
                </div>    
            <div className="background">
                <div className="grid contained-btn ">
                    <div className="opening-times">
                        <h2>Opening Times</h2>
                        <ul>
                            <li><strong>Monday - Friday:</strong> 9AM - 4PM</li>
                            <li><strong>Saturday:</strong> 9AM - 12PM</li>
                            <li><strong>Sunday:</strong> Closed</li>
                        </ul>
                    </div>  
                    <div className="stay-up-to-date">
                        <h2>Stay Up to Date</h2>
                        <form>
                            <label htmlFor="email">Your Email Address:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>  
                    <div>
                        <h2>Join Our Community</h2>
                        <div className=" flex-img">
                            <a href="#"><img src={IMAGES.image7} alt="youtube" className="w-full h-auto" /></a>
                            <a href="#"><img src={IMAGES.image8} alt="Instagram" className="w-full h-auto" /></a>
                            <a href="#"><img src={IMAGES.image9} alt="X" className="w-full h-auto" /></a>
                        </div>
                    </div>   
                    <div className="secure-payments">
                        <h2>Secure Payments</h2>
                        <span>SSL Secure - Verified by PayPal, Stripe</span>
                    </div> 
            </div>        
                </div>   
            </div>

        </>       
    );
}

export default About; 