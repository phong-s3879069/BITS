import './News_details_page_css.css';
import './News_items_css.css';
import News_items from './News_items';

export default function News_details_page(){
    const count = [1, 2, 3]
    return(
        <div>
            <div class = "news_container" style={{paddingTop: '2%'}}>
                <div class = "news_item_image"></div>
                <div class = "news_header">
                    <div class = "news_header_text">Date</div>
                    <div class = "news_header_text">Author</div>
                </div>
                
                <div class="news_body_header">Article title</div>
                
                
                <div class="news_body">Article content</div>
                
                
                <div class = 'news_relate_container'>
                    <div class="news_body_header" style = {{marginTop: '0%'}}>Relevant news</div>
                    <div class="container" >
                        <div class="row" >
                            {count.map((count) => {
                                return (
                                    <div class="col-lg"style = {{backgroundColor: '#0b1a2f'}} >
                                        <News_items />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}