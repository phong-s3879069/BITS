import News_items from './News_items';
import './News_main_page.css';
import News_Sidebar from './News_Sidebar';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getNewsCategory } from '../../redux_BITS/actions/news';
import { getNewsFromTopic } from '../../redux_BITS/actions/news';

export default function News_main_page() {
    const newsList = useSelector((state => state?.news))
    const news_categories = useSelector((state) => state?.news_categories);
    const { authData } = useSelector((state) => state?.authReducer)
    const dispatch = useDispatch()
    const { news_category_id } = useParams()
    useEffect(() => {
        dispatch(getNewsCategory());
        dispatch(getNewsFromTopic(news_category_id))
    }, [dispatch])
    console.log(news_categories)

    return (
        <div>
            <div class="news-main-page">
                <div class="news-title">
                    <div class="news-header">News for you!</div>
                    <div class="news-descript">Catch up with the latest updates from around the world</div>
                </div>
            </div>
            {/* <div class="tabs_container"> */}
            <News_Sidebar news_categories={news_categories} />
            <div class="container">
                {/* {count.map((count) => {
                        return (
                            <div class="col-lg">
                                <News_items />
                            </div>
                        )
                    })} */}
                {
                // () => {
                //     if(newsList){
                //         const codes = []
                //         for (let index = 0; index < newsList.length; index + 4) {
                //             codes.push(<div class="row">
                //                 {[0,1,2,3].map((element) => index + element < newsList.length &&
                //                         <div class="col-lg">
                //                                  <News_items news={newsList[index + element]} />
                //                             </div> )
                //                 // () => {
    
                //                 //     // for (let i = 0; i < 4; i++) {
                //                 //         if (index + i < newsList.length) {
                //                 //             codes.push(<div class="col-lg">
                //                 //                 <News_items news={newsList[index + i]} />
                //                 //             </div>)
                //                 //         }
    
                //                 //     // }
                //                 // }
                //                 }
                //            </div>)
                //         }
                //         console.log(codes)
                //         return codes
                //     }
                    
                // }
                    newsList?.map((element, i) => {
                        if (i % 4 == 0){
                            return (
                                <div class= "row">
                                    {[0,1,2,3].map((ele) => {
                                        if(i + ele < newsList.length){
                                            return (
                                                <div class="col-3">
                                                    <News_items news={newsList[i+ ele]}/>
                                                </div>    
                                            )
                                        }
                                    })}
                                </div>
                            )
                        }
                        
                    })
                }
            </div>

        </div>

    )
}