import './Navbar.css';
import { makeStyles, AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme } from "@material-ui/core";
import { CryptoState } from './CryptoContext';
import 'bootstrap/js/dist/carousel'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux_BITS/actions/user';
export default function Navbar() {
  const {authData, role} = useSelector((state) => state.authReducer)
    console.log(authData)
    console.log(role)
    const dispatch = useDispatch()
	const useStyles = makeStyles(() => ({
		Navbar: {
			
		}

	}))
	const classes = useStyles()

	const {currency, setCurrency} = CryptoState()

	console.log(currency)

	return (
		< div className={classes.Navbar}>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div class="container">
					<a class="navbar-brand" href="#"><span>Crypto</span>Connect</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
						<a class="nav-link" href="/mainpage">Market</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/news_page">News</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/forum">Forum</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">More</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/lessons_page">Lessons</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Contact</a>
					</li>
						</ul>
						{role ? <ul class="nav navbar-nav ms-auto"> <div className="dropdown">
                                <a href="#" class="d-flex align-items-center justify-content-center link-dark text-decoration-none dropdown-toggle p-1 rounded-pill" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                    <img src="http://cdn.onlinewebfonts.com/svg/img_24787.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                                    <strong>{authData?.username}</strong>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser2" data-popper-placement="top-end">
                                    {role.map((element) => element == 'admin' && <li><a class="dropdown-item" href="/addadmin">Add Admin</a></li>)}
                                    <li><a class="dropdown-item" href="/profile">Profile</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/" onClick={() => dispatch(logout())}>Sign out</a></li>
                                </ul>
                            </div> </ul> : <ul class="nav navbar-nav ms-auto"><li class="nav-item">
								<a class="nav-link" href="/login" style={{ color: '#F0F8FF' }}>Login</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/signup" style={{ color: '#FFA07A' }}>Sign Up</a>
                </li></ul>}
						<Toolbar>
							<Select
								variant="outlined"
								style={{
									width: 100,
									height: 40,
									marginLeft: "70%",
									color: 'white'
								}}
								onChange= {(e) => setCurrency(e.target.value)}
								value={currency}

							>
								<MenuItem value={'USD'}>USD</MenuItem>
								<MenuItem value={'VND'}>VND</MenuItem>
							</Select>
						</Toolbar>
					</div>
				</div>
			</nav>
		</div>
	)
}