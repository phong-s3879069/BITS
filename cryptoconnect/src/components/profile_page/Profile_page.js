import UserPost from './UserPost';
import './../../App.css';
import PersonalInforamtion from './PersonalInformation';
import FavouriteCoins from './FavouriteCoins';

export default function Profile_page() {

    const count = [1, 2, 3, 4, 5]

    return (
        <div style={{ marginTop: 80, marginBottom: 80 }}>

            <div className="container my-5">

                <PersonalInforamtion/>


                <div className="row">

                    <ul class="nav nav-tabs nav-pills with-arrow lined flex-sm-row text-center mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 border active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Favourite Coins</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link text-uppercase font-weight-bold rounded-0 border" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Posts</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <FavouriteCoins/>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                            {count.map((count) => {
                                return (
                                    
                                    <UserPost />
                                    
                                )
                            })}


                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}