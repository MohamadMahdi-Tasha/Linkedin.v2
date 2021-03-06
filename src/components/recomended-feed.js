// Codes By Mahdi Tasha
// A Function Component That Holds Recomended Feeds To Follow At Right Side Component Of Feed Page
function RecomendedFeed(props) {
    return (
        <div className={props.className}>
            <div className={'w-4rem h-4rem circle mr-1 bg-skyblue'} style={{backgroundImage: `url(${props.image})`}}></div>
            <div>
                <h4 className={'mb-dot1'}>{props.firstName} {props.lastName}</h4>
                <h6 className={'c-light-gray mb-1'}>{props.job}</h6>
                <button className={'border-1-light-black bg-none c-light-black pdot5 rounded1 width-100 dis-inline-flex jc-center bg-none-btn-hover hover-c-white'}>
                    <i className="bi bi-plus"></i>
                    <span>Follow</span>
                </button>
            </div>
        </div>
    );
}

// Exporting Recomended Feed Component
export default RecomendedFeed;