import React from 'react'
import compliment from '../src/assets/images/compliment.PNG'
import compliment2 from '../src/assets/images/compliment2.PNG'
import { Link } from 'react-router-dom';
import '../src/notice.css'
const Works = () => {
    return (
        <div>
            <section className="Notice">
                <h1><span>5000</span>만이 선택한 홈클리닝!</h1>
                <div className="Notice-part">
                    <div>
                        <Link to="/compliment" className="icon">
                            <img src={compliment} alt=""/>
                            <h3>김현수님</h3>
                            <p>너무 꺠끗해요 감사합니다^^</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/compliment2" className="icon">
                            <img src={compliment2} alt=""/>
                            <h3>손지성님</h3>
                            <p>어머 새집같아요!!</p>
                        </Link>
                    </div>
                    
                </div>
                </section>
        </div>
    )
}

export default Works