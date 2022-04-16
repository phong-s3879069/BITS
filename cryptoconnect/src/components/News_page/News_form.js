// import './News_form.css'
// import './CreateNews.js'
// import CreateNews from './CreateNews.js'
//
// export default function News_form(){
//
//     return(
//         <form>
//             <div className = 'form-container'>
//                 <div className = 'form-header'>Form</div>
//                 <div className = 'form-group'>
//                     <div className = 'form-body-title'>TITLE</div>
//                     <textarea className="form-control"  id='contentInput' rows="2" placeholder='Enter title'
//                         required
//                         value = {news.state.title}
//                         onChange  = {news.onChangeTitle}></textarea>
//                 </div>
//                 <div className = 'form-group'>
//                     <div className='form-category'>Category</div>
//                     <select className='form-control' style= {{width: '20%', marginBottom: '3%'}} id='categorySelect'
//                         required
//                         value = {news.state.category}
//                         onChange = {news.onChangeCategory}>
//                             {
//                                 news.state.categoryList.map(function(category) {
//                                     return<option
//                                         key = {category}
//                                         value = {category}> {category}
//                                         </option>
//                                 })
//                             }
//
//                     </select>
//                 </div>
//                 <div className = 'form-group'>
//                     <div className = 'form-body-title'>BODY</div>
//                     <textarea className ="form-control" id='contentInput' rows="20" placeholder='Write something here'
//                         required
//                         value = {news.state.content}
//                         onChange = {news.onChangeContent}></textarea>
//                 </div>
//                 <div className = 'form-group'>
//                     <input type='file' className = 'form-control-file form-button-container' id='addImage' placeholder = 'Add image'></input>
//                     <button type='submit' className = 'form-create-button form-button-container' id = 'create'>Create</button>
//                 </div>
//             </div>
//         </form>
//     )
// }