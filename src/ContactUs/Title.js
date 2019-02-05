import React from 'react';

const Title = (props)=>{
    return(
        <div>
            {
                props.window === "mobile" ?
                    <div className={`relative`}>
                        <div className={`mobile_image_mail`}/>
                        <div className={`mobile_header`}>
                            <div className={`centering_div`}>Contact Us</div>
                        </div>
                    </div>
                    : null

            }
            {
                props.window === "desktop" ?
                    <div className={`center`}><h1 className={`front_title_${props.window}`}>Contact</h1></div> : null
            }
        </div>



    );
};

    export default Title;