import { useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import "./ChatComponent.css"

export default function ChatComponent() {
  const [formData, setFormData] = useState({content: "", question: ""});
  const [systemAnswer, setSystemAnswer] = useState({answer: "", logicScore: null})

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(` content: ${formData.content}, question: ${formData.question}`
    // );
    let params = {
      context: formData.content,
      question: formData.question,
    };
  
    let query = Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                                  .join('&');
      
    fetch('http://127.0.0.1:8000/answering?' + query)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          alert(data)
          console.log(data)
          setSystemAnswer((prevSystemData) => ({ ...prevSystemData, "text": data.text, 'logicScore': data.logit_score,  }))
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
    };
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="submit-form">
      {/* <form onSubmit={handleSubmit}> */}
        <textarea className="submit-form-context" placeholder="Enter you context information!" id="content" name="content" value={formData.content} onChange={handleChange}/>
        <button className = "submit-form-context-button" type="submit">Submit</button>
      </form>
      <div className="response-answer-container">
        {systemAnswer.logicScore !== null && <span className="span-response-answer">{systemAnswer.text} {systemAnswer.logicScore}</span>}
      </div>
      <div className="chatbar-container">
            <div className="chatbar-input-container">
              <input className="chatbar-input" placeholder="Enter your message" id="question" name="question" value={formData.question} onChange={handleChange}></input>
              <button className="chatbar-button" onClick={handleSubmit}>
                <FaArrowRightFromBracket className="chatbar-icon"/>
              </button>
            </div>
        </div>
    </div>
  );
}