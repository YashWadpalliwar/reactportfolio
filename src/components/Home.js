import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                <span>My Portfolio</span>
            </div>
            <div className="des">
                {/* 30 */}
                "WebSync Solution" is a forward-thinking web development and digital marketing company located in the city of orange Nagpur. While our journey began recently. Our commitment to delivering exceptional services, comprehensive training, and unmatched value has already made us a go-to partner for businesses across various industry.
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>03/12</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
