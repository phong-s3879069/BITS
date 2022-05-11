import { EditAvatar, EditProfile } from "../forms/EditProfile"
import { userFollow, userUnfollow } from "../../redux_BITS/actions/profile"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
export default function PersonalInformation({userInfo}) {
    const { authData } = useSelector((state) => state?.authReducer)

    const [follow, setFollow] = useState(false);
    const [followersCount, setFollowerCount] = useState(0)

    const dispatch = useDispatch();
    
    useEffect(() => { 
        if (userInfo?.followers?.includes(authData?._id)) {
            setFollow(true)
        }
        setFollowerCount(userInfo?.followers?.length)
    }, [userInfo, authData])
    // console.log(userInfo?.followers)
    return (
        <div className="row my-4">
            <div className="col-sm-12 col-md-4 col-lg-4">
            <img src={`${userInfo?.avatar ? `https://cryptoconnect.s3.amazonaws.com/${userInfo?.avatar}` : 'http://cdn.onlinewebfonts.com/svg/img_24787.png'} `} alt="" width="250" height="250" class="rounded-circle me-2" />
            {authData && authData?._id === userInfo?._id
                    ?<EditAvatar /> : <></>}
            </div>

            <div className="col-sm-12 col-md-8 col-lg-8 mt-5">
                <h4>{userInfo?.name}</h4>
                <div class="d-flex flex-row">
                    <h6>Email:</h6>
                    <p class="mx-2" >{userInfo?.email}</p>
                </div>
                <h6>Bio:</h6>
                <p>{userInfo?.bio}</p>
                <div class="d-flex">
                    <h6>Followers:</h6>
                    <p class="mx-3">{followersCount}</p>
                </div>
                <div class="d-flex">
                    <h6>Followings:</h6>
                    <p class="mx-3">{userInfo?.followings?.length}</p>
                </div>
                
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
                    {authData && authData?._id === userInfo?._id
                    ? <></> : 
                    follow == false ?
                    <button type="button" class="btn btn-warning ms-auto"
                     onClick={() => {
                        setFollow(!follow)
                        setFollowerCount(followersCount + 1)
                        dispatch(userFollow(userInfo?._id, authData?._id))
                     }}
                     >Follow</button> : 
                     <button type="button" class="btn btn-warning ms-auto"
                     onClick={() => {
                        setFollow(!follow)
                        setFollowerCount(followersCount - 1)
                        dispatch(userUnfollow(userInfo?._id, authData?._id))
                     }}
                     >UnFollow</button>
                     }
                    
                    {authData && authData?._id === userInfo?._id
                    ?<button type="button" class="btn btn-warning ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        
                    Edit
                </button>: <></>}
                    <EditProfile />
                </div>
            </div>

        </div>
    )
}