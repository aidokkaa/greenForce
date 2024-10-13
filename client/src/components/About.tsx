import React from 'react'

const About = ({about}) => {
  return (
    <div className='section' ref={about}>
        <div className="aboutContainer">
            <div className="aboutWrap">
                <div className="aboutRight">
                    <img src="https://vesma.s3.ap-northeast-1.amazonaws.com/uploads/common/2023/04/24/%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D0%B7%D0%B5%D0%BB-6935ce3d4cf3.jpg" alt="" />
                </div>
               <div className="aboutLeft">
               <h1>
                GreenForce: seeds and equipment
                 for growing microgreens and edible flowers</h1>
               </div>
            </div>
        </div>
    </div>
  )
}

export default About