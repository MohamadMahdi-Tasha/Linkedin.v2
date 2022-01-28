// Codes By Mahdi Tasha
// A Function Component That Holds Recomended Feeds To Follow At Right Side Component Of Feed Page
function RecomendedFeed(props) {
    return (
        <div>
            <div className={'w-4rem h-4rem circle'} style={{backgroundImage: `url(${props.image})`}}></div>
            <div>
                <h3>{props.firstName} {props.lastName}</h3>
                <h4>{props.job}</h4>
                <button>
                    <i className="bi bi-plus"></i>
                    Follow
                </button>
            </div>
        </div>
    );
}

// Exporting Recomended Feed Component
export default RecomendedFeed;