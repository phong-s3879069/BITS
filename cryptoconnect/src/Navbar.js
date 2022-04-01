
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">CryptConnect</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Markets</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Forums</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">More</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Lessons</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}