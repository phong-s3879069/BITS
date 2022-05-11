import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getNewsFromTopic } from '../../redux_BITS/actions/news';
import News_items from './News_items';
export default function RelevantNews({ news_cat }) {
    const news_detail = useSelector((state) => state.news)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsFromTopic(news_cat))
    }, [news_cat])

    return (
        <div className="row">
            {news_detail?.map((element, i) => {
                if (i % 4 == 0) {
                    return (
                        <div class="row">
                            {[0, 1, 2, 3].map((ele) => {
                                if (i + ele < news_detail.length) {
                                    return (
                                        <div class="col-lg-3 col-sm-12 col-md-12">
                                            <News_items news={news_detail[i + ele]} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )
                }

            })}
        </div>
    )
}