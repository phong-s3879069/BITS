import './News_form.css'


export default function News_form(){
    return(
        // <div class = 'form-container'>
        //     <div class= 'form-header'>Form</div>
        //     <div class= 'form-body-title'>TITLE</div>
        //     <div class= 'form-title-field'>
        //         <div class=  'form-black-text'>Enter title...</div>
        //     </div>
        //     <div class = 'form-category'>
        //         <div class = 'form-white-text'>Category</div>
        //     </div>
        //     <div class = 'form-body-title'>Body</div>
        //     <div class = 'form-content-field'>
        //         <div class = 'form-black-text'>Write something here</div>
        //     </div>
        //     <div class = 'form-button-container'>
        //         <div class = 'form-image-button'>
        //             <div class = 'form-white-text'>Add image</div>
        //         </div>
        //         <div class = 'form-create-button'>
        //             <div class = 'form-white-text'>Create</div>
        //         </div>
        //     </div>
        // </div>
    
        <form>
            <div class = 'form-container'>
                <div class = 'form-header'>Form</div>
                <div class = 'form-group'>
                    <div class = 'form-body-title'>TITLE</div>
                    <input type='text' class='form-control' id='tiltleInput' placeholder='Enter title...'></input>
                </div>
                <div class = 'form-group'>
                    <div class='form-category'>Category</div>
                    <select class='form-control' style= {{width: '20%', marginBottom: '3%'}} id='categorySelect'>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                        <option>Category 4</option>
                    </select>
                </div>
                <div class = 'form-group'>
                    <div class = 'form-body-title'>BODY</div>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="20" placeholder='Write something here'></textarea>
                </div>
                <div class = 'form-group'>
                    <input type='file' class = 'form-control-file form-button-container' placeholder = 'Add image'></input>
                    <button type='submit' class = 'form-create-button form-button-container'>Create</button>
                </div>
            </div>
        </form>
    )
}