import React, { useEffect, useState } from 'react';
import './Assignment.css';
import Header from './Header';
import HomePoster from '../Images/home-poster.webp';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAnimation = () => {
        setIsPlaying(!isPlaying);
    };

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const imageOffset = Math.min(offsetY / 1000, 0.5); // Scale the maximum value to 0.5
    const textOffset = Math.min(offsetY / 1000, 1.2); // Scale the maximum value to 1.2
    const navigate = useNavigate();
    const handleDownloadClick = () => {
        navigate("/download"); // Navigate to the download page
    };
    return (
        <>
            <Header />
            <div className='home-container'>
                    <button onClick={toggleAnimation} className='scroll-btn'>
                        {isPlaying ? "Pause Animation" : "Play Animation"}
                    </button>
                <div className="chrome-home">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg"
                        alt="Chrome-logo"
                    />
                </div>
                <div className="text-container">
                    <div className="text-line">The browser</div>
                    <div className="animation-row">
                        <div className="text-line2">built to be</div>
                        <div className={`scroll-container ${isPlaying ? "play" : "pause"}`}>
                            <span className="scroll-content">
                                <span className="scroll-item">Fast</span>
                                <span className="scroll-item">Safe</span>
                                <span className="scroll-item">Yours</span>
                                <span className="scroll-item">Fast</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='home_btn' onClick={handleDownloadClick}>Download Chrome</button>
                <p className='small_text'>For Windows 11/10 64-bit.</p>
            </div>
            <div>
                <p className='small_text'>
                    <div>Help make Google better by automatically sending usage</div>
                    <div>statistic and crash reports to Google. <span style={{ color: '#1a73e8', fontWeight: 'bold' }}>Learn more</span></div>
                </p>
            </div>
            <div>
                <p className='small_text'>
                    <div>By downloading Chrome, you agree to the <span style={{ color: '#1a73e8', fontWeight: 'bold' }}>Google Terms of Service and</span></div>
                    <div><span style={{ color: '#1a73e8', fontWeight: 'bold' }}>Chrome and ChromeOS Additional Terms of Service</span></div>
                </p>
            </div>

            <div className="scroll-content-wrapper">
                <div
                    className="image-foreground"
                    style={{
                        transform: `translateY(${offsetY * 0.4}px)`, // Image moves down
                    }}
                >
                    <img src={HomePoster} alt="Foreground" style={{ position: "relative", zIndex: 1 }} />
                </div>
                <div
                    className="text-background"
                    style={{
                        transform: `translateY(-${offsetY * 0.7}px)`, // Text moves up
                    }}
                >
                    <p className="text-line3">
                        The fast way to do <br />
                        <span style={{ marginLeft: '15%' }}>things online</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
