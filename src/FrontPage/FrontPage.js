import React, {Component} from 'react';



import laptop from "./laptop.jpg"
import progress from "./progress.jpg"

//import HOC to handle different screen widths below
import withWindowListener from "../Session/withWindowListener";


class FrontPageBase extends Component {

    render() {
        const window = this.props.window;
        console.log('front page props', this.props);
        return (


            <div className='page_theme'>


                <div className={`front_topics_${window}`}>
                    {window === "mobile" ?
                        <div className={`relative`}>
                            <div className={`mobile_image_keyboard`}/>
                            <div className={`mobile_header`}><div className={`centering_div`}>Professional Results</div></div>
                        </div>
                        :
                        null
                    }
                    {window === "desktop" ?
                        <div className={`center`}><h1 className={`front_title_${window}`}>Professional Results</h1>
                        </div> : null
                    }
                    <ul className={`img_ul_${window}`}>
                        {window === "desktop" ?
                            <li className={`paragraph_image_right_${window}`}>
                                <div className={`image_div_${window}`}><img src={laptop}/></div>
                            </li>
                            : null
                        }
                        <li className='paragraph'>
                            <div className={`vert_center`}>

                                <p className={`topic_header`}>Unlimited Flexibility, Uncompromised Results</p>
                                <p>
                                    Here are SteelFace we are dedicated to providing professional results. Just like
                                    your grandma knows the best cookies dont come from a can, and nether do the best
                                    websites. We have gotten away from template based web design, and while not having
                                    to think inside the box not only will your website get that sweet sweet custom look
                                    we will also not be limited to certain functionality. As a kicker since your site
                                    will
                                    be designed on a platform that knows no boundaries, if there is ever additional
                                    fetures
                                    that you would like to add on in the future we can do it with out switching
                                    platforms
                                    and rewriting code saving you time and money.
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className={`front_topics_${window}`}>
                    {window === "mobile" ?
                        <div className={`relative`}>
                            <div className={`mobile_image_progress`}/>
                            <div className={`mobile_header`}> <div className={`centering_div`}>Updates</div></div>
                        </div>
                        :
                        null
                    }
                    {window === "desktop" ?
                        <div className={`center`}><h1 className={`front_title_${window}`}> Live Updates</h1></div>
                        : null
                    }
                    <ul className={`img_ul_${window}`}>
                        {window === "desktop" ?
                            <li className='paragraph_image'>
                                <div className={`image_div_${window}`}><img src={progress}/></div>
                            </li> : null
                        }
                        <li className='paragraph'>

                            <div className={`vert_center`}>
                                <p className={`topic_header`}>Stay Up to Date on Your Project's Progress</p>
                                <p>
                                    We understand that you are exited to receive updates on your new website. As such we
                                    have
                                    created
                                    customer accounts that will house all the information you will need to keep up to
                                    date
                                    on your
                                    website
                                </p>
                            </div>

                        </li>
                    </ul>
                </div>


                <div className={`front_topics_${window}`}>
                    {window === "mobile" ?
                        <div className={`relative`}>
                            <div className={`mobile_image_mail`}/>
                            <div className={`mobile_header`}> <div className={`centering_div`}>Contact Us</div></div>
                        </div>
                        :
                        null
                    }
                    {
                        window === "desktop" ?
                            <div className={`center`}><h1 className={`front_title_${window}`}>Contact</h1></div> : null
                    }
                    <ul className={`img_ul_${window}`}>
                        { window==="desktop"?
                            <li className={`paragraph_image_right_${window}`}>

                                <div className={`image_div_${window}`}><img src={progress}/></div>
                            </li>:null
                        }
                        <li className='paragraph'>
                            <div className={`vert_center`}>
                                <p className={`topic_header`}>Let's Get Started!</p>
                                <p>
                                    Convinced? Please get a hold of us and we will get your future project started!
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        )
    }
}


export const FrontPage = withWindowListener(FrontPageBase);