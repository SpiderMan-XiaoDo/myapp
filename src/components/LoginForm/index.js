import "./LoginForm.css"
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function LoginForm(){
    const navigate = useNavigate()
    // State để lưu trữ giá trị của input
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Xử lý sự kiện khi người dùng thay đổi giá trị của input
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Xử lý khi người dùng nhấn nút đăng nhập
    const handleSubmit = (e) => {
        e.preventDefault();
        // Thực hiện xác thực tại đây (gửi dữ liệu đến server, kiểm tra...)
        console.log('Username:', username);
        console.log('Password:', password);
        // alert(`Username: ${username}, Password: ${password}`);
        // Sau khi xác thực, bạn có thể điều hướng đến trang khác hoặc thực hiện các hành động khác tùy thuộc vào kết quả.
        navigate('/chatpage')
    };
    return(
        <div className="overlay"> {/* Thêm lớp overlay */}
            <div className="content-wrapper"> {/* Thêm lớp container mới */}
                <div className="login-form-container">
                    <img src= {window.location.origin + '/assets/img/logophochat/logo6.jpg'} alt="Mô tả hình ảnh" 
                        className="login-form-logo"  
                    />
                    <h1>
                        Chào mừng bạn quay trở lại với PhoBot.AI
                    </h1>
                    <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        className="login-form-input"
                        type="text"
                        id="username"
                        placeholder="Type your email"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                        />
                    </div>
                    <div>
                        <input
                        className="login-form-input"
                        type="password"
                        id="password"
                        placeholder="Type your password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        />
                    </div>
                    <div className="login-form-checkbox">
                        <div>
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div>
                            <a href="/forgot-password">Forgot password</a>
                        </div>
                    </div>
                    <button className="login-form-button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginForm
