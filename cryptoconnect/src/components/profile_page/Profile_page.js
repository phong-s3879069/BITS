import UserPost from './UserPost';
import PersonalInformation from './PersonalInformation';
import { useSelector, useDispatch } from 'react-redux';
import './../../App.css';
import FavouriteCoins from './FavouriteCoins';
import { useEffect } from 'react';
import { getOwnedPosts, getPersonalInfo } from '../../redux_BITS/actions/profile';
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
    
    // console.log(posts)
    const dispatch = useDispatch();
    // const {authData} = useSelector((state) => state?.authReducer)

    // console.log(authData)

    const user_id = useParams();

    console.log(user_id)

    useEffect(() => {
        dispatch(getPersonalInfo(user_id.user_id));
        dispatch(getOwnedPosts(user_id.user_id));
    }, [dispatch])

    const userInfo = useSelector((state) => state.user)
    const userPostList = useSelector((state) => state.posts)
    console.log(userInfo)
    // useEffect(() => {
    //     dispatch(getOwnedPosts(user_id.user_id));
    // }, [dispatch])

    // useEffect(() => {
    //     dispatch(getSavedFunction(user_id.user_id));
    // }, [dispatch])

    // const userPostList = useSelector((state) => state.profileOwnedPost)

    // const userSavedFunctionsList = useSelector((state) => state.profileSavedFunction)
    
    // console.log(userSavedFunctionsList)

    return (
        <div style={{ marginTop: 80}}>

            <div className="container my-5 text-white">

                <PersonalInformation userInfo={userInfo}/>


                <div className="row">

                    <ul class="nav nav-tabs nav-pills with-arrow lined flex-sm-row text-center mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 border active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Cheat Sheet</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link text-uppercase font-weight-bold rounded-0 border" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Posts</a>
                        </li>
                    </ul>

                    <div class="tab-content text-white" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <FavouriteCoins />
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


                        {userPostList.map((element) => {
                                return (
                                    <div>
                                        <UserPost post={element} userInfo={userInfo}/>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}