import News_items from './News_items';
import './News_main_page.css';
import React from "react";

export default function News_main_page() {
    const count = [1, 2, 3, 4]
    return (
        <div className= "whole_page">
            <div className="news-main-page">
                <div className="news-title">
                    <div className="news-header">News for you!</div>
                    <div className="news-descript">Catch up with the latest updates from around the world</div>
                </div>
            </div>
            {/* <div class="tabs_container"> */}
            <div className="container d-flex justify-content-start">
                <ul className="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                    <div className="tabs_items col-sm">
                        <div className="tabs_text">All</div>
                    </div>
                    <div className="tabs_items col-sm">
                        <div className="tabs_text">Crypto</div>
                    </div>
                    <div className="tabs_items col-sm">
                        <div className="tabs_text">Currency</div>
                    </div>
                    <div className="tabs_items col-sm">
                        <div className="tabs_text">Stocks</div>
                    </div>
                </ul>
            </div>
            <div className="container">
                <div className="row">
                    {count.map((count) => {
                        return (
                            <div className="col-lg">
                                <News_items/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}