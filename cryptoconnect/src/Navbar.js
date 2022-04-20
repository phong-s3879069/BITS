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
							<div className="dropdown">
                                <a href="#" class="d-flex align-items-center justify-content-center link-dark text-decoration-none dropdown-toggle p-1 rounded-pill" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false" role="button" style={{ backgroundColor: '#fda47e' }}>
                                    <img src="http://cdn.onlinewebfonts.com/svg/img_24787.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                                    <strong>Username</strong>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser2" data-popper-placement="top-end">


                                    <li><a class="dropdown-item" href="/addfunction">Add New Function</a></li>
                                    <li><a class="dropdown-item" href="/addadmin">Add Admin</a></li>
                                    <li><a class="dropdown-item" href="/profile">Profile</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/">Sign out</a></li>
                                </ul>
                            </div>
                </ul>
			</div>
		</div>
	</nav>
        </div>
    )
}