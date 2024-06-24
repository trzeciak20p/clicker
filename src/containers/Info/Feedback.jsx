import React, {useRef, useState} from 'react';
import {NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import FeedbackSee from './FeedbackSee';
import FeedbackSend from './FeedbackSend';


export default function Feedback() {

  const [feedbackData, setFeedbackData] = useState([])

  const addFeedback = (username, content) => {
    setFeedbackData((prev) => [...prev, {"username" : username, "content" : content}]) 
    console.log(feedbackData)
  }


  return (
  <div className="feedback">
    <h3>Feedback</h3>
        <nav>
          <ul class="d-flex flex-row p-0 text-center">
            <li class="w-50">
              <NavLink tabIndex="-1" to="/feedback/send">
                <input class="btn btn-dark w-100" type="button" value="Send"/>
              </NavLink>
            </li>
            <li class="w-50">
              <NavLink tabIndex="-1" to="/feedback/see">
                <input class="btn btn-dark w-100" type="button" value="See"/>
              </NavLink>
            </li>
          </ul>
      </nav>
      <Routes>
      <Route>
          <Route path="/see" element={<FeedbackSee feedbackData={feedbackData}/>} />
          <Route path="/send" element={<FeedbackSend addFeedback={addFeedback}/>} />
        </Route>
        
      </Routes>
  </div>
  );
}
