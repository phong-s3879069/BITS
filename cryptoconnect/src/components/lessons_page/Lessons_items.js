import './Lessons_items_css.css';

export default function Lessons_items() {
    return (
        <div class="card-container">
            <div class="cardd">
                <div class="card-header-container">
                    <div class="date">Date</div>
                    <div class="author">Author</div>
                </div>
                <div class="card-image-container"></div>
                <div class="card-body-container">
                    <header class="card-body-header">Header</header>
                    <p class="card-body-text">Paragraph</p>
                </div>
            </div>
        </div>
    )
}