import './News_main_page.css';
export default function News_Sidebar({ news_categories }) {
    return (
        <div class="container d-flex justify-content-start">
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                {news_categories && news_categories.map(element => {
                    return (
                        <div class="tabs_items col-sm tabs_text">
                            <a href={`/news_page/${element._id}`} 
                            className={`nav-link text-light link-dark ${element._id == news_categories && 'active'}`}
                            style={{ backgroundColor: `${element._id == news_categories && 'black'}` }}  
                            aria-current="page">
                                {/* <svg class="bi me-2" width="16" height="16"><use xlinkHref="#home" /></svg> */}
                                {/* <div class="tabs_text"> */}
                                    {element.name}
                                    {/* </div> */}
                            </a>
                            
                        </div>

                    )
                })}
            </ul>
        </div>
    )
}