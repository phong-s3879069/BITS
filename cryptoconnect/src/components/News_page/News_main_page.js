import News_items from './News_items';
import './News_main_page.css';

export default function News_main_page() {
    const count = [1, 2, 3, 4]

    return (
        <div>
            <div class="news-main-page">
                <div class="news-title">
                    <div class="news-header">News for you!</div>
                    <div class="news-descript">Catch up with the latest updates from around the world</div>
                </div>
            </div>
            {/* <div class="tabs_container"> */}
            <div class="container ">
                <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                    <div class="tabs_items col-sm">
                        <div class="tabs_text">All</div>
                    </div>
                    <div class="tabs_items col-sm">
                        <div class="tabs_text">Crypto</div>
                    </div>
                    <div class="tabs_items col-sm">
                        <div class="tabs_text">Currency</div>
                    </div>
                    <div class="tabs_items col-sm">
                        <div class="tabs_text">Stocks</div>
                    </div>
                </ul>
            </div>
            <div class="container">
                <div class="row">
                    {count.map((count) => {
                        return (
                            <div class="col-lg">
                                <News_items />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}