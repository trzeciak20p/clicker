import React from 'react';


export default function FeedbackSee({feedbackData}) {

  return (
  <div className="h-100">
    <h4>Browse Feedback</h4>
    <div className="feedback-see d-flex flex-column">
    {feedbackData.length <= 0 ?
      <span className="fs-4 align-self-center">No feedback yet</span>
      : 
      <ul>
        {feedbackData.map((f) => {
          return (<li><span>{f.username}</span><br/>{f.content}</li>)
        })}
      </ul>
    }
    </div>
  </div>
  );
}
