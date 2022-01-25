// Codes By Mahdi Tasha
// Variables For Creating Random Rgba Color
const random_color1 = Math.round(Math.random() * 256);
const random_color2 = Math.round(Math.random() * 256);
const random_color3 = Math.round(Math.random() * 256);
export const color = `rgb(${random_color1},${random_color2},${random_color3})`;

// A Function Component That Holds A Profile Picture Element
function Profile_Picture(props) {
    return (
        <div className={'profile-circle p1 w-4rem h-4rem circle dis-flex jc-center ai-center mt-negative3 shadow'} className={props.className} style={{backgroundColor: color}}>
            <h3>{props.first_name}</h3>
        </div>
    );
}

export default Profile_Picture;