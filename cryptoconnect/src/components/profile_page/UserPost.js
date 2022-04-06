export default function UserPost() {
    return (
        <div class="container-fluid">
            <div class="card mb-4 mt-3 row">
                {/* <div class="card-header text-muted" id={props.element._id}> */}
                <div class="card-header text-muted">
                    <div>
                        <a
                            // href={`/profile/${props.element.user_id}`}
                            href="#"
                            style={{ "text-decoration": "none", color: "black" }}
                        >
                            {/* Posted by: {props.element.username ? props.element.username : props.username}&nbsp;&nbsp; */}
                            Posted by: Username
                        </a>
                        {/* {props.createdAt}
          {props.isProfilePage ? "" : (props.isUser && currentUser.id !== props.element.user_id ? <button id="flw-btn" type="button" class="btn btn-primary float-right"
            style={currentUser != null && followState ? { background: "grey" } : {}}
            onClick={currentUser != null && (followState ? () => { setFollowState(false); unFollow(); } : () => { setFollowState(true); follow(); })}>
            {followState ? "Unfollow" : "Follow"}
          </button> : "")} */}
                    </div>
                    <span class="pull-right">
                        &nbsp;&nbsp;
                    </span>
                </div>
                <a
                    // href={`/forum/post/postdetail/${props.element._id}`}
                    href="#"
                    style={{ "textDecoration": "none", color: "black" }}
                >
                    <div class="card-body">
                        <h3 class="card-title">
                            {/* {props.element.title} */}
                            Title of Post
                        </h3>
                        {/* <p class="class-text">{props.element && props.element.content && props.element.content.length > 400
                        ? props.element.content.substring(0, 399) + '......'
                        : props.element.content}</p> */}
                        <p class="class-text">Lorum</p>
                    </div>
                </a>

                <div class="card-footer text-muted  d-flex bd-highlight">
                    <span class='mt-2'>
                        {/* <span style={props.isUser && liked ? { color: "#0d6efd" } : {}} onClick={props.isUser && (liked ? () => { dis_like(props.element._id); setLiked(false); } : () => { create_like(props.element._id); setLiked(true); })}>
            <i
              class="fa fa-thumbs-up hover-icon vote-button w3-large"
              id="post-{{$post->id}}-up"
              value="0"
            ></i>
          </span> */}
                        {/* <span style={props.isUser && liked ? { color: "#0d6efd" } : {}} onClick={props.isUser && (liked ? () => { dis_like(props.element._id); setLiked(false); } : () => { create_like(props.element._id); setLiked(true); })}> */}
                        {/* <i
                            class="fa fa-thumbs-up hover-icon vote-button w3-large"
                            id="post-{{$post->id}}-up"
                            value="0"
                        ></i> */}
                        <i class="bi bi-hand-thumbs-up"></i>
                    </span>
                    <span class="numberOfLikes p-2 bd-highlight">
                        {/* {numberOfVotes ? numberOfVotes.vote.length : props.element.vote.length} Likes */}
                        Likes
                    </span>
                    <span class='mt-2'>
                        <i class="bi bi-reply"></i>
                    </span>
                    <span class="numberOfLikes ms-2 p-2 bd-highlight">
                        {/* {numberOfVotes ? numberOfVotes.vote.length : props.element.vote.length} Likes */}
                        Replies
                    </span>
                    {/* </span> */}
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                        //   href={`/forum/post/postdetail/${props.element._id}`}
                        href="#"
                        style={{ "textDecoration": "none", color: "black" }}>
                        <i class=" fas fa-comment-dots hover-icon w3-large"></i>
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    )
}