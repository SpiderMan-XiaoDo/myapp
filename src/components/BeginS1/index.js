import LoadingAnimation from "../Loading"
import "./BeginS1.css"

function BeginS1(){
    return(
        <div className="overlay"> {/* Thêm lớp overlay */}
            <div className="content-wrapper"> {/* Thêm lớp container mới */}
                <div className="begins1-container">
                    <img src= {window.location.origin + '/assets/img/logophochat/logo6.jpg'} alt="Mô tả hình ảnh" 
                        className="begins1-logo"  
                    />
                    <h1>
                        PhoBot.AI
                    </h1>
                    <LoadingAnimation/>
                </div>
            </div>
        </div>
    )
}
export default BeginS1
