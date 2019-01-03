import React, {Component} from 'react';
import custom_v1_web from "./custom_v1_web.jpg";
import laptop from "./laptop.jpg"
import progress from "./progress.jpg"


export const FrontPage = () =>
    <div className='body'>

        <div className="front_topics">
            <div><h1 className="front_title">Completely Custom</h1></div>
            <ul className='img_ul'>
                <li className='paragraph_image'>
                    <div className="image_div">
                        <img className="image" src={custom_v1_web}/>
                    </div>
                </li>
                <li className='paragraph'>
                    <p>
                        By not using canned templates your website will get that sweet sweet custom look. Not only will
                        your website look better, but we will not be limited to functionalities provided by a 3rd party.
                        Do you have an idea that you have not seen on the web? If so we can work on that!
                    </p>
                </li>
            </ul>
        </div>

        <div className="front_topics">
            <div><h1 className="front_title">Professional Results</h1></div>
            <ul className='img_ul'>
                <li className='paragraph_image_right'>
                    <div className="image_div"><img src={laptop}/></div>
                </li>
                <li className='paragraph'>
                    <p>
                        Here are SteelFace we are dedicated to providing professional results.
                    </p>
                </li>
            </ul>
        </div>

        <div className="front_topics">
            <div><h1 className="front_title">Progress Reports</h1></div>
            <ul className='img_ul'>
                <li className='paragraph_image'>
                    <div className="image_div"><img src={progress}/></div>
                </li>
                <li className='paragraph'>
                    <p>
                        We understand that you are exited to receive updates on your new website. As such we have
                        created
                        customer accounts that will house all the information you will need to keep up to date on your
                        website
                    </p>
                </li>
            </ul>
        </div>

        <div className="front_topics">
            <div><h1 className="front_title">About US</h1></div>
            <ul className='img_ul'>
                <li className='paragraph_image_right'>
                    <div className="image_div"></div>
                </li>
                <li className='paragraph'>
                    <p>
                        Not only are we committed to providing un parallel end product, but we plan on doing so way into
                        the
                        future. As such we are keeping up with leading edge technology so that your websites can be
                        updated
                        with the latest and greatest before your competition.

                        By working with us not only will you have access to the latest technology, but you will also
                        help
                        use in making a difference in our community. We donate 5% of our profits to local charities.
                    </p>
                </li>
            </ul>
        </div>

    </div>
;