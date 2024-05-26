// import LoadingAnimation from "../Loading"
import Authentication from "../Authentication"
import "./BeginS2.css"

function BeginS2(){
    return(
        <div className="overlay"> {/* Thêm lớp overlay */}
            <div className="content-wrapper"> {/* Thêm lớp container mới */}
                <div className="begins2-container">
                    <img src= {window.location.origin + '/assets/img/logophochat/logo6.jpg'} alt="Mô tả hình ảnh" 
                        className="begins2-logo"  
                    />
                    <h1>
                        Chào mừng bạn đến với PhoBot.AI
                    </h1>
                    <Authentication/>
                </div>
            </div>
        </div>
    )
}
export default BeginS2
