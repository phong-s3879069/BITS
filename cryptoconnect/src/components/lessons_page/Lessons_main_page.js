import Lessons_items from './Lessons_items';
import './Lessons_main_page.css';
import Lessson_Sidebar from './Lesson_Sidebar';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getLessonCategory, getLessonsFromTopic } from '../../redux_BITS/actions/lesson';

export default function Lessons_main_page() {
    const lessonList = useSelector((state => state?.lessons))
    const lesson_categories = useSelector((state) => state?.lesson_categories);
    const { authData } = useSelector((state) => state?.authReducer)
    const dispatch = useDispatch()
    const { lesson_category_id } = useParams()
    useEffect(() => {
        dispatch(getLessonCategory());
        dispatch(getLessonsFromTopic(lesson_category_id))
    }, [dispatch])
    const count = [1, 2, 3, 4]

    return (
        <div>
            <div class="lessons-main-page">
                <div class="title">
                    <h1>Lessons</h1>
                    <p>Learn from experts</p>
                </div>
            </div>
            <Lessson_Sidebar lesson_categories={lesson_categories}/>
            <div class="container">
                    {lessonList?.map((element, i) => {
                        if (i % 4 == 0){
                            return (
                                <div class= "row">
                                    {[0,1,2,3].map((ele) => {
                                        if(i + ele < lessonList.length){
                                            return (
                                                <div class="col-3">
                                                    <Lessons_items lessons={lessonList[i+ ele]}/>
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