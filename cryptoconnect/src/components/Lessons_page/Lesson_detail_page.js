import './Lesson_detail_page.css'
function Lessons_detail_page(){
    return(
    <form>
      <div class="form-container">
       <div class="form-header text-muted"> Lessons title </div> 
       <div class="card-header-container">
            <div class="date">Date</div>
            <div class="author">Author</div>
        </div>
        <div class="text-muted image">Image</div>
        <div class="text-muted text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget elementum nisl. Morbi pellentesque arcu non metus volutpat facilisis. Quisque lobortis sagittis purus vel porttitor. Mauris feugiat, justo et sollicitudin sollicitudin, leo ex interdum augue, in fringilla tortor diam eu turpis. Nam id elit libero. Nulla sem lorem, egestas nec ante vel, eleifend feugiat quam. Duis ultrices, justo sed cursus elementum, tellus ex vulputate arcu, ut ullamcorper elit ex facilisis nulla. Nam ultrices ante nulla, quis tincidunt tellus interdum nec. Nulla facilisi. Nam eleifend dignissim sem at tempor. Duis consectetur pretium ex a sagittis. Proin leo orci, scelerisque non odio id, finibus aliquet est. Quisque ut mauris lectus. Praesent pharetra sagittis mauris, sit amet luctus nisi ultricies in. Sed non sem bibendum, vestibulum magna ut, condimentum ipsum.</div>
        <textarea class="comment" rows="3" placeholder="Leave a comment"></textarea>
      </div>
    </form>
    )}

export default Lessons_detail_page;