import weblogo from "./assets/weblogo.jpg";
import document from "./assets/document.png";
import forum from "./assets/forum.png";
import searching from "./assets/searching.jpg"
import questioning from "./assets/questioning.jpg"
import personalizing from "./assets/personalizing.jpg"
import startgif from "./assets/star.gif"
import chattraderepeat from "./assets/chattraderepeat.png";
export default function Homepage() {
    return (
        <div>
            <section id="carousel-intro" style={{
                width: "100%",
                height: "100vh",
                background: "#000",
                overflow: "hidden",
                position: "relative"
            }}>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                }}>
                    <div class="carousel-indicators" style={{
                        position: "absolute",
                        right: 0,
                        left: 0,
                        bottom: 0
                    }}>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner" role="listbox" style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }}>
                        <div class="carousel-item active" style={{
                            background: "rgba(0,0,0,1)", position: "absolute",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}>
                            <div class="carousel-caption d-none d-md-block" style={{ transform: "translateY(-50%)", bottom: "initial", top: "50%", overflow: "hidden" }}>
                                <h2>Welcome to CryptoConnect</h2><br />
                                <h4>A Cryoto Website</h4>
                                <a class="btn btn-success rounded-pill mt-4 mt-lg-4 mt-md-4 mt-xl-4" href="#about" role="button" style={{ fontSize: "120%" }}>Get Started</a>
                            </div>

                        </div>
                        <div class="carousel-item" style={{
                            background: "rgba(0,0,0,1)", position: "absolute",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}>
                            <img src={searching} class="d-block w-100" alt="..." style={{
                                opacity: 0.3, width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} />
                            <div class="carousel-caption d-none d-md-block" style={{ transform: "translateY(-50%)", bottom: "initial", top: "50%" }}>
                                <h2>One-page Programming Language Functions</h2><br />
                                <h5>We offer a one-page UI for each programming languages' lists of functions to help you save time of searching and reduce reloading effort</h5>
                                <a class="btn btn-success rounded-pill mt-4 mt-lg-4 mt-md-4 mt-xl-4" href="#about" role="button" style={{ fontSize: "120%" }}>Get Started</a>
                            </div>
                        </div>
                        <div class="carousel-item" style={{
                            background: "rgba(0,0,0,1)", position: "absolute",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}>
                            <img src={questioning} class="d-block w-100" alt="..." style={{
                                opacity: 0.3, width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} />
                            <div class="carousel-caption d-none d-md-block" style={{ transform: "translateY(-50%)", bottom: "initial", top: "50%" }}>
                                <h2>Feel Free to Ask</h2><br />
                                <h5>Our categorized small discussion forums for each topic give you a high chance ask and get answer as soon as possible</h5>
                                <a class="btn btn-success rounded-pill mt-4 mt-lg-4 mt-md-4 mt-xl-4" href="#about" role="button" style={{ fontSize: "120%" }}>Get Started</a>
                            </div>
                        </div>
                        <div class="carousel-item" style={{
                            background: "rgba(0,0,0,1)", position: "absolute",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}>
                            <img src={personalizing} class="d-block w-100" alt="..." style={{
                                opacity: 0.3, width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }} />
                            <div class="carousel-caption d-none d-md-block" style={{ transform: "translateY(-50%)", bottom: "initial", top: "50%" }}>
                                <h2>Chat in real-time</h2><br />
                                <h5>Speak with traders from around the world and never trade alone again.</h5>
                                <a class="btn btn-success rounded-pill mt-4 mt-lg-4 mt-md-4 mt-xl-4" href="#about" role="button" style={{ fontSize: "120%" }}>Get Started</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section class="text-white" id="about" style={{ backgroundColor:"#000", paddingBottom: "5%", paddingTop: "3%" }}>
                <h1 className="text-center">Chat.Trade.Repeat</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid " style={{ backgroundColor:"#fff", maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
                <div className="text-center ms-5 me-5">
                    <p>Nowadays there are numerous trading platforms due to the increase in trading demands. However, these platforms have some common problems which is the lack of a social site for traders to be able to share their ideas as well as a place where new beginners could learn from scratch. To encounter these problems, our group has come up with a solution, a platform where people can trade, discuss and learn new things about trading in general. Our expected outcome is to be able to serve those mentioned necessities.</p>
                    <div>
                        <img src={chattraderepeat} class="img-fluid rounded" alt="..."/>
                    </div>
                </div>
            </section>

            <section class="text-white" id="about" style={{ backgroundColor:"#000", paddingBottom: "5%", paddingTop: "3%" }}>
                <h1 className="text-center">ABOUT US</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid " style={{ backgroundColor:"#fff", maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
                <div className="text-center ms-5 me-5">
                    <p>Nowadays there are numerous trading platforms due to the increase in trading demands. However, these platforms have some common problems which is the lack of a social site for traders to be able to share their ideas as well as a place where new beginners could learn from scratch. To encounter these problems, our group has come up with a solution, a platform where people can trade, discuss and learn new things about trading in general. Our expected outcome is to be able to serve those mentioned necessities.</p>
                    <img src={weblogo} class="img-fluid mt-3"/>
                </div>
            </section>

            <section id="services" style={{ backgroundColor: "#fff", paddingBottom: "5%", paddingTop: "3%" }}>
                <h1 className="text-center">OUR SERVICES</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid" style={{ maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4">
                        <div class="card text-center rounded-3" style={{ backgroundColor: "#f2efdb" }}>
                            <div class="card-body">
                                <img src={document} class="img-fluid w-25 h-25" alt="..." /><br /><br />
                                <h5 class="card-title">Market</h5>
                                <p class="card-text">Update Cryptocurrency Price</p>
                                <a href="/cheatsheet" class="btn btn-outline-secondary" style={{ backgroundColor: "#8c8a8b", outlineColor: "#8c8a8b", color: "#f2efdb" }}>Go Explore</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card text-center rounded-3" style={{ backgroundColor: "#f2efdb" }}>
                            <div class="card-body">
                                <img src={forum} class="img-fluid w-25 h-25" alt="..." /><br /><br />
                                <h5 class="card-title">Discussion Forum</h5>
                                <p class="card-text">Feel free to post questions here</p>
                                <a href="/discussion" class="btn btn-outline-secondary" style={{ backgroundColor: "#8c8a8b", outlineColor: "#8c8a8b", color: "#f2efdb" }}>Go Explore</a>
                            </div>
                        </div>
                    </div>   
                    <div class="col-sm-2"></div>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4">
                        <div class="card text-center rounded-3" style={{ backgroundColor: "#f2efdb" }}>
                            <div class="card-body">
                                <img src={document} class="img-fluid w-25 h-25" alt="..." /><br /><br />
                                <h5 class="card-title">Market</h5>
                                <p class="card-text">Update Cryptocurrency Price</p>
                                <a href="/cheatsheet" class="btn btn-outline-secondary" style={{ backgroundColor: "#8c8a8b", outlineColor: "#8c8a8b", color: "#f2efdb" }}>Go Explore</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card text-center rounded-3" style={{ backgroundColor: "#f2efdb" }}>
                            <div class="card-body">
                                <img src={forum} class="img-fluid w-25 h-25" alt="..." /><br /><br />
                                <h5 class="card-title">Discussion Forum</h5>
                                <p class="card-text">Feel free to post questions here</p>
                                <a href="/discussion" class="btn btn-outline-secondary" style={{ backgroundColor: "#8c8a8b", outlineColor: "#8c8a8b", color: "#f2efdb" }}>Go Explore</a>
                            </div>
                        </div>
                    </div>   
                    <div class="col-sm-2"></div>
                </div>
            </section>

            <section id="contact" style={{ paddingBottom: "5%", paddingTop: "3%" }}>
                <h1 className="text-center">CONTACT US</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid" style={{ maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
                <div class="container-fluid">
                    <div class="row d-flex justify-content-evenly">

                        <div class="col-md-4 text-center">
                            <div class="contact-address">
                                <img src="https://img.icons8.com/ios/50/000000/address--v1.png" />                                <h3>Address</h3>
                                <address>Saigon South Residences, District 7, Ho Chi Minh City, Vietnam</address>
                            </div>
                        </div>

                        <div class="col-md-4 text-center border-start border-dark">
                            <div class="contact-phone">
                                <img src="https://img.icons8.com/ios/50/000000/phone.png" />
                                <h3>Phone Number</h3>
                                <p>(+84) 852 640 807</p>
                            </div>
                        </div>

                        <div class="col-md-4 text-center border-start border-dark">
                            <div class="contact-email">
                                <img src="https://img.icons8.com/ios/50/000000/envelope-dots.png" />
                                <h3>Email</h3>
                                <p>cryptoconnectservices@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}