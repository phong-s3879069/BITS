export function EditProfile() {
    return (
        <div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Personal Information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">

                                <div class="col-12">

                                    <form class="row">
                                        <div class="mx-1">
                                            <h6>Username</h6>
                                            <input type="text" class="form-control mb-3" placeholder="Cornflower" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            <h6>Name</h6>
                                            <input type="text" class="form-control mb-3" placeholder="Huu Tri" aria-label="NewFunction" aria-describedby="basic-addon1"></input>

                                            <h6>Email</h6>
                                            <input type="text" class="form-control mb-3" placeholder="ngohuutri@gmail.com" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            <h6>Bio</h6>
                                            <textarea class="form-control" placeholder="Bio..." id="FunctionDescription" rows="2"></textarea>

                                            <h6>Contact</h6>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" class="rounded-circle  mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" class="rounded-circle  mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://uploads-ssl.webflow.com/604f62b336573137786d8b67/6069a6cb43ba4018a72d9acb_twitter.png" class="rounded-circle  mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" class="rounded-circle mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360" class="rounded-circle  mx-1 my-1" style={{ width: "20px", height: "20px" }}></img>
                                                <input type="text" class="form-control mb-3" placeholder="link" aria-label="NewFunction" aria-describedby="basic-addon1"></input>
                                            </div>

                                        </div>


                                    </form>
                                </div>

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export function EditAvatar() {
    return (
        <div>
            <div class="d-flex">
                <button type="button" class="btn btn-primary ms-auto" data-bs-toggle="modal" data-bs-target="#editAvaModal">
                    <i class="bi bi-camera"></i>
                </button>
            </div>

            <div class="modal fade" id="editAvaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Profile Picture</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <img src="http://cdn.onlinewebfonts.com/svg/img_24787.png" class="rounded-circle mx-auto my-auto d-block w-50" alt="Profile Image" />
                                <h6 class="text-center my-2">Preview Image</h6>

                                <div class="my-3">
                                    <label for="formFile" class="form-label">Upload image from computer</label>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}