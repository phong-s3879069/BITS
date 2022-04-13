import './Lessons_form.css'
function Lessons_form(){
    return(
    <form>
      <div class="form-container">
       <div class="form-header text-muted"> Lessons </div> 
       <div class="form-group">
          <div class="lesson-title text-muted"> Title</div>
          <textarea class="form-control" rows="1" placeholder="Title"></textarea>
        </div>
        <div class="form-group">
          <div class="category text-muted">Category</div>
          <select class="custom-select select-container" id="inlineFormCustomSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="form-group">
          <div class="body text-muted">Body</div>
          <textarea class="form-control" rows="10" placeholder="Write something"></textarea>
        </div>
        <div class="form-group button-container">
        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
        <button type="submit" class="btn btn-primary mb-2 submit-button">Submit</button>
        </div>
      </div>
    </form>
    )}

export default Lessons_form;