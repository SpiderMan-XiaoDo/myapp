import './ChatPage.css'
import { useState, useEffect, useRef } from "react";
import { ColorRing } from 'react-loader-spinner';
import PaperPlaneIcon from './paper-plane.png'
function ChatPage(){
    
    const [formData, setFormData] = useState({message: ""});
    const [context, setContext]  = useState("")
    const [inputQuestion, setInputQuestion] = useState({question: ""})
    const [listPairQueAns, setListPairQueAns] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const chatResponseRef = useRef();

    useEffect(() => {
        // Cuộn đến phần tử cuối cùng sau mỗi lần danh sách thay đổi
        chatResponseRef.current.scrollTop = chatResponseRef.current.scrollHeight;
    }, [listPairQueAns]);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevformData) => ({ ...prevformData, [name]: value }));
    };

    const handleChangeQuestion = (event) =>{    
        const { name, value } = event.target;
        setInputQuestion((prevQuestion) => ({ ...prevQuestion, [name]: value }));
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
    setContext(formData.message)
    };
    const systemResponse = listPairQueAns.map((element, index) =>{
        return (
            <div className='system-response-item-container'>
                <div className='system-response-item-question'>
                    <p style={{fontWeight: "bold", fontSize: '20px', textAlign: "left"}}>You</p>
                    <p>{element["question"]}</p>
                </div>
                <div className='system-response-item-answer'>
                    <p style={{fontWeight: "bold", fontSize: '20px', textAlign: "right"}} >PhoBERT Chat</p>
                    <p>{element["answer"]}</p>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div >
                <form onSubmit={handleSubmit} className="submit-form">
                    <textarea readOnly={context.length !== 0} className="submit-form-context" placeholder="Enter you context information!" id="message" name="message" value={formData.message} onChange={handleChange}/>
                    <button disabled={context.length !== 0} className = "submit-form-context-button" type="submit">Submit</button>
                </form>
            </div>
            <div className='chat-response-container' ref={chatResponseRef}>
                {systemResponse}
            </div>
            {isLoading && <div className='spiner-responding-container'>
                <p style={{lineHeight: "48px"}}>Responding...</p>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>}
            <div className="chatbar-container">
                <input className="chatbar-input" placeholder="Enter your message" name='question' id= "input-question" value={inputQuestion.question} onChange={handleChangeQuestion}></input>
                {/* value={inputQuestion.question} onChange={handleChangeQuestion}  */}
                <button style={{    height: "50px",
    width: "50px"}} onClick={()=>{
                    let question = inputQuestion.question
                    if(question.length !== 0){
                        setIsLoading(true)
                        setInputQuestion((prevQuestion) => ({ ...prevQuestion, question: "" }));
                        fetch("http://127.0.0.1:8000/answering?question=" + inputQuestion.question

                            + "&context=" + context
                        )
                        .then((response) =>{
                            return response.json()
                        }).then((data)=>{
                            console.log(data)
                            let answer = data["text"]
                            setIsLoading(false)
                            setListPairQueAns([...listPairQueAns, {"question": question, "answer": answer}])
                        })
                    }
                }}>
                    <img src={PaperPlaneIcon} alt='img-icon' style={{width: '32px', height: '32px'}} />  
                </button> 
            </div>
        </div>
    )   
 }
export default ChatPage