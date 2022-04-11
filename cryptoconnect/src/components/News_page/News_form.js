import './News_form.css'

export default function News_form(){
    return(
        <div class = 'form-container'>
            <div class= 'form-header'>Form</div>
            <div class= 'form-body-title'>TITLE</div>
            <div class= 'form-title-field'>
                <div class=  'form-black-text'>Enter title...</div>
            </div>
            <div class = 'form-category'>
                <div class = 'form-white-text'>Category</div>
            </div>
            <div class = 'form-body-title'>Body</div>
            <div class = 'form-content-field'>
                <div class = 'form-black-text'>Write something here</div>
            </div>
            <div class = 'form-button-container'>
                <div class = 'form-image-button'>
                    <div class = 'form-white-text'>Add image</div>
                </div>
                <div class = 'form-create-button'>
                    <div class = 'form-white-text'>Create</div>
                </div>
            </div>
        </div>
    )
}