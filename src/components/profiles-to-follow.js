// Codes By Mahdi Tasha
// A Function Component That Holds All Element Of Profile To Follow
function ProfilesToFollow(props) {
    if (!props.borderBottom) {
        return (
            <a href="#">
                <div className={'dis-inline-flex p1 width-100 jc-sb ai-center'}>
                    <div className={'dis-inline-flex ai-center'}>
                        <div className={'w-4rem h-4rem bg-size-cover mr-1'} style={{backgroundImage: `url(${props.image})`}}></div>
                        <div>
                            <h3 className={'c-black fw'}>{props.name}</h3>
                            <h5 className={'c-light-gray'}>{props.followersNumber} Followers</h5>
                        </div>
                    </div>
                    <button className={'c-blue bg-none fs-1 dis-inline-flex border-none p1 btn-bgnone-hover roundeddot5'}>
                        <i className="bi bi-plus"></i>
                        Follow
                    </button>
                </div>
            </a>
        );
    } else {
        return (
            <a href="#">
                <div className={'dis-inline-flex border-bottom-1-light-black p1 width-100 jc-sb ai-center'}>
                    <div className={'dis-inline-flex ai-center'}>
                        <div className={'w-4rem h-4rem bg-size-cover mr-1'} style={{backgroundImage: `url(${props.image})`}}></div>
                        <div>
                            <h3 className={'c-black fw'}>{props.name}</h3>
                            <h5 className={'c-light-gray'}>{props.followersNumber} Followers</h5>
                        </div>
                    </div>
                    <button className={'c-blue bg-none fs-1 dis-inline-flex border-none p1 btn-bgnone-hover roundeddot5'}>
                        <i className="bi bi-plus"></i>
                        Follow
                    </button>
                </div>
            </a>
        );
    }
}

export default ProfilesToFollow;