// Codes By Mahdi Tasha
// Importing Components
import './styles/styles.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Log_in from "./Pages/log-in/log-in.js";
import Sign_Up from "./Pages/sign-up/sign-up";

// The App Function That Contains Pages And Components
function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route path={"/"} exact><Log_in/></Route>
                        <Route path={"/signup"}><Sign_Up /></Route>
                        <Route path={'/feed'}>
                            <h3>Feed Page</h3>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

// Exporting The Whole App
export default App;