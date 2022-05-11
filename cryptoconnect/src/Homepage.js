import document from "./assets/document.png";
import forum from "./assets/forum.png";
import coinmarket from './assets/coinmarket.png'
import lessonpage from "./assets/lessonpage.png"
import newspage from "./assets/newspage.png"
import startgif from "./assets/star.gif"
import chattraderepeat from "./assets/chattraderepeat.png";
import welcometowebsite from "./assets/welcometowebsite.mp4";
import market from "./assets/market.png";
import './Homepage.css';
export default function Homepage() {
    return (
        <div class="HomePage">
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
                                
                            </div>
                        </div>
                        <div class="carousel-item">

                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="animated fadeInDown"></h5>
                                <p class="animated fadeInUp"></p>
                                
                            </div>
                        </div>
                        <div class="carousel-item">

                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="animated fadeInDown"></h5>
                                <p class="animated fadeInUp"></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div class="video">
                        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                            <source src={welcometowebsite} type="video/mp4"></source>
                        </video>
                    </div>
                </section>
                <section class="text-white" id="about" style={{ backgroundColor: "#000", paddingBottom: "5%", paddingTop: "3%" }}>
                    <h1 className="text-center">Coin Market</h1>
                    <div class="section-header-break text-center">--------<img src={startgif} class="img-fluid " style={{ backgroundColor: "#fff", maxWidth: "1.2%", maxHeight: "1.2%" }} />--------</div>
                    <br />
                    <div className="text-center ms-5 me-5">
                        <p>Update real-time Cryptocurrency Price</p>
                        <div>
                            <img src={coinmarket} class="figure-img img-fluid rounded" alt="..." />
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
                            <img src={newspage} class="img-fluid rounded" alt="..." />
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
                            <img src={lessonpage} class="img-fluid rounded" alt="..." />
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}