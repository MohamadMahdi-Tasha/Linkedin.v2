// Codes By Mahdi Tasha
// Importing Part
let firstName;
let lastName;
let image;

// Fetching Fake Name Api To Get Fake And Random Information
fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // Do This When Data Has Arrived
    .then((data) => {
        firstName = data.results[0].name.first;
        lastName = data.results[0].name.last;
        image = data.results[0].picture.medium;
    })

// A Link That Returns Random Picture With Width Of 800px And Height Of 200px
const randomImageLink = 'https://picsum.photos/800/200';

// Class Component That Holds Profile Cards
function Profile_Cards(props) {
    return (
        <div className={props.className}>
            <div className={'width-100 h-5rem bg-size-cover'} style={{backgroundImage: `url(${randomImageLink})`}}></div>
            <div className={'dis-flex jc-center z-index99 mt-negative2'}>
                <div className={'width-100 shadow w-5rem h-5rem p1 circle bg-size-cover z-index99'} style={{backgroundImage: `url(${image})`}}></div>
            </div>
            <div className={'p1'}>
                <h3 className={'mt-1 w-100 dis-flex jc-center ai-center'}>
                    <span style={{marginRight: '.5rem'}} id={'firstName'}>{firstName}</span>
                    <span id={'lastName'}>{lastName}</span>
                </h3>
                <h4 className={'w-100 dis-flex jc-center ai-center'} style={{color: '#5f5f5f'}}>Based On Your Profile</h4>
                <a href="#" className={'width-100 dis-flex jc-center ai-center'}>
                    <button className={'bg-none border-1-white c-blue width-80 btn-bgnone-hover pdot5 rounded1 mt-1'}>Connect</button>
                </a>
            </div>
        </div>
    );
}

// Exporting Profile Cards Component
export default Profile_Cards;