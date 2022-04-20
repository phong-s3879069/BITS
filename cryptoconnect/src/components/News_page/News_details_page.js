import './News_details_page_css.css';
import './News_items_css.css';
import News_items from './News_items';
import News_form from "./News_form";
import EditNews from "./EditNews";

export default function News_details_page(){
    const count = [1, 2, 3]
    return(
        <div style={{backgroundColor: '#122540', paddingBottom: '100%'}}>
            <div class = "news_container" style={{paddingTop: '2%'}}>
                <div style={{float: 'right', marginRight: '5%'}}><EditNews/></div>
                <div class="news_body_header">Article title</div>
                <div className="news_header">
                    <div className="news_header_text">Date:</div>
                    <div className="news_header_text">Author</div>
                </div>
                <div className="news_item_image"></div>
                <div class="news_body">Article content</div>
            </div>
            <div className='news_relate_container news_container'>
                <div className="news_body_header" style={{marginTop: '0%'}}>Relevant news</div>
                <div className="container">
                    <div className="row">
                        {count.map((count) => {
                            return (
                                <div className="col-lg" style={{backgroundColor: '#0b1a2f'}}>
                                    <News_items/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
