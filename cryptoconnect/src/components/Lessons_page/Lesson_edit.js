import './Lesson_edit.css'
export default function Lesson_edit() {
    return (
        <form>
      <div class="form-container">
       <div class="form-header text-muted"> Edit Lesson post</div> 
       <div class="card-header-container">
            <textarea class="date" rows="1" placeholder="Change date"></textarea>
            <textarea class="author" rows="1" placeholder="Change the author"></textarea>
        </div>
        <textarea class="comment mt-3" rows="3" placeholder="Leave a comment"></textarea>
        <div class="button-container">
        <button class="delete">Delete</button>
        <button class="save">Save</button>
        </div>
        
      </div>
    </form>
    )
}