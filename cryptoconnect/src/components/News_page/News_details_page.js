import './News_details_page_css.css';
import './News_items_css.css';
import News_items from './News_items';

export default function News_details_page(){
    const count = [1, 2, 3]
    return(
        <div>
            <div class = "news_container" style={{paddingTop: '2%'}}>


                
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