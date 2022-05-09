export default function Lessson_Sidebar({lesson_categories}) {
    return (
        <div class="container d-flex justify-content-start">
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                {lesson_categories && lesson_categories.map(element => {
                    return (
                        <a class="tabs_items col-sm tabs_text" href={`/lesson_page/${element._id}`}
                        aria-current="page">{element.name}</a>
                    )
                })}
                {/* <a class="tabs_items col-sm tabs_text" href="#">All</a>
                <a class="tabs_items col-sm tabs_text" href="#">Crypto</a>
                <a class="tabs_items col-sm tabs_text" href="#">Currency</a>
                <a class="tabs_items col-sm tabs_text" href="#">Stocks</a> */}
            </ul>
        </div>
    )
}