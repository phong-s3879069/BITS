import document from "./assets/document.png";
import forum from "./assets/forum.png";
import startgif from "./assets/star.gif"
import chattraderepeat from "./assets/chattraderepeat.png";
import welcometowebsite from "./assets/welcometowebsite.mp4";
import market from "./assets/market.png";
import './Homepage.css';
export default function Homepage() {
    return (
        <div>
            <section>
                <div id="carouselExampleCaptions" class="carousel-slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">

                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="animated fadeInDown"></h5>
                                <p class="animated fadeInUp"></p>
                                {/* <p class="animated fadeInUp"><a href="#"></a></p> */}
                            </div>
                        </div>
                        <div class="carousel-item">

                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="animated fadeInDown"></h5>
                                <p class="animated fadeInUp"></p>
                                {/* <p class="animated fadeInUp"><a href="#"></a></p> */}
                            </div>
                        </div>
                        <div class="carousel-item">

                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="animated fadeInDown"></h5>
                                <p class="animated fadeInUp"></p>
                                {/* <p class="animated fadeInUp"><a href="#"></a></p> */}
                            </div>
                        </div>
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> */}
                </div>
                <section> 
                    <div class="video">
                            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                                    <source src={welcometowebsite} type="video/mp4"></source>   
                            </video>
                    </div>
                </section>

            <section class="text-white" id="about" style={{ backgroundColor: "#000", paddingBottom: "5%", paddingTop: "3%", marginTop: "2%" }}>
                <h1 className="text-center">Coin Market</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid " style={{ backgroundColor: "#fff", maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
                <div className="text-center ms-5 me-5">
                    <p>Update real-time Cryptocurrency Price</p>
                    <div>
                    <img src={chattraderepeat} class="figure-img img-fluid rounded" alt="..."/>
                    </div>
                </div>
            </section>

            <section class="text-white" id="about" style={{ backgroundColor: "#000", paddingBottom: "5%", paddingTop: "3%" }}>
                <h1 className="text-center">Chat.Trade.Repeat</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid " style={{ backgroundColor: "#fff", maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
                <div className="text-center ms-5 me-5">
                    <p>Nowadays there are numerous trading platforms due to the increase in trading demands. However, these platforms have some common problems which is the lack of a social site for traders to be able to share their ideas as well as a place where new beginners could learn from scratch. To encounter these problems, our group has come up with a solution, a platform where people can trade, discuss and learn new things about trading in general. Our expected outcome is to be able to serve those mentioned necessities.</p>
                    <div>
                        <img src={chattraderepeat} class="img-fluid rounded" alt="..." />
                    </div>
                </div>
            </section>


            <section class="text-white" id="about" style={{ backgroundColor: "#000", paddingBottom: "5%", paddingTop: "3%" }}>
                <h1 className="text-center">News about Cryptocurrency</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid " style={{ backgroundColor: "#fff", maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
                <div className="text-center ms-5 me-5">
                    <p>We deliver up-to-date, breaking crypto news about the latest Bitcoin, Ethereum, Blockchain, NFTs, and Altcoin trends and happenings.</p>
                    <div>
                        <img src={chattraderepeat} class="img-fluid rounded" alt="..." />
                    </div>
                </div>
            </section>

            <section class="text-white" id="about" style={{ backgroundColor: "#000", paddingBottom: "5%", paddingTop: "3%" }}>
                <h1 className="text-center">Learn how to trade</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid " style={{ backgroundColor: "#fff", maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
                <div className="text-center ms-5 me-5">
                    <p>Get creative with the world markets by being part of the largest social network on the web for traders and investors. Discorver greate ideas, then publish your own</p>
                    <div>
                        <img src={chattraderepeat} class="img-fluid rounded" alt="..." />
                    </div>
                </div>
            </section>

            <section class="text-white" id="about" style={{ backgroundColor: "#000", paddingBottom: "5%", paddingTop: "3%" }}>
                <h1 className="text-center">ABOUT US</h1>
                <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid " style={{ backgroundColor: "#fff", maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                <br />
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
            </section>
        </div>
    )
}