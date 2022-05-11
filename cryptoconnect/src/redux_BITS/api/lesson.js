import axios from 'axios';
const endPoint = "http://localhost:9000"

// get lesson category
export const fetchAllLessonCategories = () => axios.get(endPoint + '/lessonPage/getLessonCategory');
// get Lesson for
export const fetchLessonsForTopic = (lesson_category_id) => axios.get(endPoint + "/lessonPage/getLesson/" + lesson_category_id)

export const addLesson = (newLesson) => axios.post(endPoint + '/lessonPage/lesson/add', newLesson, {
    headers: {
        "Content-Type": 'multipart/form-data'
    }
})

export const updateLesson = (updateLesson) => axios.put(endPoint + '/lessonPage/lesson/update', updateLesson)

export const deleteLesson = (deleteLesson) => axios.delete(endPoint + '/lessonPage/lesson/delete/' + deleteLesson)

export const fetchLessonDetail = (lesson_id) => axios.get(endPoint + '/lessonPage/getLessonDetail/' + lesson_id)

export const fetchLessonDetailIncludingCategory = (lesson_id) => axios.get(endPoint + '/lessonPage/getLessonDetailIncludingCategory/'+ lesson_id)




