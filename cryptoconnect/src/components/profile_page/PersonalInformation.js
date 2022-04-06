import { EditAvatar, EditProfile } from "../forms/EditProfile"
export default function PersonalInformation() {
    return (
        <div className="row my-5">
            <div className="col-sm-12 col-md-4 col-lg-4">

                <img src="http://cdn.onlinewebfonts.com/svg/img_24787.png" class="rounded-circle mx-auto my-auto d-block w-50" alt="Profile Image" />
                <EditAvatar />

            </div>

            <div className="col-sm-12 col-md-8 col-lg-8">
                <h4>Phong Tran</h4>
                <div class="d-flex flex-row">
                    <h6>Email:</h6>
                    <p class="mx-2" >tranduyphong18072002@gmail.com</p>
                </div>
                <h6>Bio:</h6>
                <p>Hello</p>
                <div class="d-flex">
                    <h6 class="me-3">Contact:</h6>
                    <a href='#'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png" class="rounded-circle me-2" style={{ width: "30px" }}></img>
                    </a>
                    <a href='#'>
                        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" class="rounded-circle me-2" style={{ width: "30px" }}></img>
                    </a>
                    <a href='#'>
                        <img src="https://uploads-ssl.webflow.com/604f62b336573137786d8b67/6069a6cb43ba4018a72d9acb_twitter.png" class="rounded-circle me-2" style={{ width: "30px" }}></img>
                    </a>
                    <a href='#'>
                        <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" class="rounded-circle me-2" style={{ width: "30px" }}></img>
                    </a>
                    <button type="button" class="btn btn-warning ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                    </button>
                    <EditProfile />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div>
                                Post
                            </div>
                            <div class="ms-2">
                                44
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                Likes
                            </div>
                            <div class="ms-2">
                                345
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                Followers
                            </div>
                            <div class="ms-3">
                                21
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}