import './Lesson_edit.css'
export default function Lesson_edit() {
    return (
      <form>
      <div className='edit-container'>
          <div className= 'edit-header'>Edit lesson</div>
          <div className = 'form-group' style={{backgroundColor: 'transparent'}}>
              <div className = 'edit-body-title'>TITLE</div>
              <textarea className = "form-control"  id='contentInput' rows="1" placeholder='Enter title'
              />
          </div>
          <div className = 'form-group' style={{backgroundColor: 'transparent'}}>
              <div className ='edit-category'>Category</div>
              <select className = 'form-control' style= {{width: '15%', marginBottom: '2%'}} id='categorySelect'>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                  <option>Category 4</option>
              </select>
          </div>
          <div className = 'form-group' style={{backgroundColor: 'transparent'}}>
              <div className = 'edit-body-title'>BODY</div>
              <textarea className = "form-control" id='contentInput' rows="15" placeholder='Write something here'/>
          </div>
          <div className = 'form-group' style={{backgroundColor: 'transparent'}}>
              <input type='file' className = 'form-control-file edit-button-container' id='addImage' placeholder = 'Add image'/>
              <button type='submit' className = 'edit-create-button edit-button-container' id = 'create'>Edit</button>
              <button type='delete' className = 'edit-create-button edit-button-container' id = 'delete'>Delete</button>
          </div>
      </div>
  </form>
    )
}