// Codes By Mahdi Tasha
// A Class Component That Holds All Element Of Profile To Follow
function ProfilesToFollow(props) {
    return (
        <a href="#">
            <div>
                <div className={'width-100 p2 bg-size-cover'} style={{backgroundImage: `url(${props.image})`}}></div>
                <div>
                    <h3>{props.name}</h3>
                    <h5>{props.followersNumber} Followers</h5>
                </div>
                <button>
                    <i className="bi bi-plus"></i>
                    Follow
                </button>
            </div>
        </a>
    );
}

export default ProfilesToFollow;