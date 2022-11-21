import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Bubble from "./routes/Bubble";
import {useState,useEffect} from "react"
import { BrowserView, MobileView } from 'react-device-detect'
function App() {

  return (
    <Router>
        <Switch>
        {/* <MobileView> */}
            <Route path='/movie/:id'> 
            {/* path는 경로 컴포넌트로 사이트 띄우기 */}
              <Detail/>
            </Route>

            <Route path='/'>
                <Bubble/>
            </Route>

        {/* </MobileView> */}
        </Switch>
    </Router>
  );
}
export default App;