import './News_items_css.css';

export default function News_items() {
    return (
        <div class="card-container">
            <div class="card">
                <div class="card-header-container">
                    <div class="card-header-1">Date</div>
                    <div class="card-header-2">Author</div>
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