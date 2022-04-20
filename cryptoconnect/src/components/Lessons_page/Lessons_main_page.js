import Lessons_items from './Lessons_items';
import './Lessons_main_page.css';

export default function Lessons_main_page() {
    const count = [1, 2, 3, 4]

    return (
        <div class="lessons-main">
            <div class="lessons-main-page">
                <div class="title">
                    <h1>Lessons</h1>
                    <p>Learn from experts</p>
                </div>
            </div>

            <div class="container d-flex justify-content-start">
                <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                    <a class="tabs_items col-sm tabs_text" href="#">All</a>
                    <a class="tabs_items col-sm tabs_text" href="#">Crypto</a>
                    <a class="tabs_items col-sm tabs_text" href="#">Currency</a>      
                    <a class="tabs_items col-sm tabs_text" href="#">Stocks</a> 
                </ul>
            </div>
            <button class="button">Create new lesson</button>
            <div class="container">
                <div class="row">
                    {count.map((count) => {
                        return (
                            <div class="col-lg">
                                <Lessons_items/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}