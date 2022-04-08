import './Navbar.css';
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#"><span>Crypto</span>Connect</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="#">Market</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">News</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Forum</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">More</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Lessons</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Contact</a>
					</li>
				</ul>
                <ul class="nav navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><span class="fas fa-user"></span> Sign Up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><span class="fas fa-sign-in-alt"></span> Login</a>
                            </li>
                </ul>
			</div>
		</div>
	</nav>
        </div>
    )
}