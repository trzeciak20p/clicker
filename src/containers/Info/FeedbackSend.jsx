import React, {useRef} from 'react';


export default function FeedbackSend({addFeedback}) {

  const username = useRef(null)
  const content = useRef(null)


  const sendFeedback = () => {
    console.log(username.current.value)
    if(username.current.value == "" || content.current.value == ""){
      return;
    }
    addFeedback(username.current.value, content.current.value)
    
    //json storage

  }

  return (
  <div>
    <h4>Send Feedback</h4>
    <form className="d-flex flex-column align-items-center p-2 ">
      <label className="form-label">Username<br/>
        <input type="text" ref={username}/>
      </label>
      <label className="form-label">Feedback<br/>
        <textarea class="w-100" ref={content} rows="8" cols="23"/>
      </label><br/>
      <input class="btn btn-dark mx-a" type="button" value="send" onClick={sendFeedback}/>
    </form>
  </div>
  );
}
