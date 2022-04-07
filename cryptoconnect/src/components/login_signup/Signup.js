function Signup(){
    return(
        <form >
           <h1 class="h3 mb-3 font-weight-normal text-muted">Signup</h1>
           <label class="sr-only text-muted">Fullname</label>
           <input type="text" id="fullname" class="form-control mb-3" placeholder="Fullname"/>      
           <label class="sr-only text-muted">Email Address</label>
           <input type="email" id="emailAddress" class="form-control mb-3" placeholder="Email"/>
           <label for="pasword" class="sr-only text-muted">Password</label>
           <input type="password" id="password" placeholder="Password" class="form-control"/>
           <div class="mt-3"><button class="btn btn-lg btn-primary btn-block">Sign up</button></div>
           <p class="text-muted mt-5" >Don't have an account? <a href="Signup.js">Signup</a></p>
        </form> )
}

export default Signup;