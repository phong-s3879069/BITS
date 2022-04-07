import './form.css';
function Login(){
    return(
        <form class="mt-5" >
           <h1 class="h3 mb-3 font-weight-normal text-muted">Please sign in</h1>      
           <label class="sr-only text-muted">Email Address</label>
           <input type="email" id="emailAddress" class="form-control mb-3" placeholder="Email"/>
           <label for="pasword" class="sr-only text-muted">Password</label>
           <input type="password" id="password" placeholder="Password" class="form-control"/>
           <div class="mt-3"><button class="btn btn-lg btn-primary btn-block">Sign in</button></div>
           <p class="text-muted mt-5" >Don't have an account? <a href="#" onclick="Signup()">Signup</a></p>
        </form> )
}

export default Login;