import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {  } from '../../redux_BITS/actions/news';
import { getLessonsFromTopic } from '../../redux_BITS/actions/lesson';
// import News_items from './News_items';
import Lessons_items from './Lessons_items';
export default function RelevantNews({ lesson_cat }) {
    const lessonList = useSelector((state) => state.lessons)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLessonsFromTopic(lesson_cat))
    }, [lesson_cat])

    return (
        <div className="row">
            {lessonList?.map((element, i) => {
                if (i % 4 == 0) {
                    return (
                        <div class="row">
                            {[0, 1, 2, 3].map((ele) => {
                                if (i + ele < lessonList.length) {
                                    return (
                                        <div class="col-3">
                                            <Lessons_items lessons={lessonList[i + ele]} />
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