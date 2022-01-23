// Codes By Mahdi Tasha
// Importing Components
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Log_in from "./Pages/log-in/log-in.js";
import './styles/styles.scss';

// The App Function That Contains Pages And Components
function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <Log_in/>
                        </Route>
                        <Route path={"/signup"}>
                            <h1>asdasdasdasdasdada</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;