import React from 'react'
import Logo from '../media/image.jpg';
import './css/homepage.css';

export default function Homepage() {
    return (
        <div>
            <div className="top">
            <div className="left">
            <div className="header">
               <div className="dot"></div>
               <div className="infos">
                   <h8>ON-DEMAND COURSES</h8>
               </div>
            </div>
            <div className="header-1">
                <div className="infos-1">
                    Complete Questions Masterclass for Web Development
                </div>
                <div className="infos-2">
                    <h5>Amet facilisi phasellus lacus, sit massa, erat placerat aenean aliquet ultrices eleifend enim enim lacus elit.</h5>
                </div>
            </div>
            <div className="header-3"><button className='button-1'>start course</button></div>
            </div>
            <div className="right">{Logo}</div>
            </div>
            <div className="middle">
                    <div className="subscribe">SUBSCRIBE</div>
                    <div className="mid-infos">All Access Membership </div>
                    <div className="mid-infis-2">Dictum enim vel in consectetur arcu nunc habitasse mattis vitae accumsan, etiam ultrices eget non tincidunt.</div>
                    <button className="button-2">Subscribe & Save</button>
            </div>

            <div className="bottom">
                 <div className="footer-top">
                     <div className="f-t-one">
                         <div className="f-t-o-a"><h5>BetaInc</h5></div>
                         <div className="f-t-o-b">Amet morbi justo facilisis integer<br/> odio eu feugiat egestas nulla a <br/>ipsum morbi iaculis urna nunc.</div>
                         <div className="f-t-o-c">
                         <div id="social">
			<a class="facebookBtn smGlobalBtn" href="#" ></a>
			<a class="twitterBtn smGlobalBtn" href="#" ></a>
			<a class="googleplusBtn smGlobalBtn" href="#" ></a>
			<a class="linkedinBtn smGlobalBtn" href="#" ></a>
		</div>
	
                         </div>
                     </div>
                     <div className="f-t-two">
                         <div className="f-t-t-a"><h5>Learning Path</h5></div>
                         <div className="f-t-t-b"><ul>
                            <li>Web Development</li>
                            <li>Mobile Development</li> 
                            <li>Machine Learning</li>
                            <li>Data Science</li></ul></div>
                     </div>
                     <div className="f-t-three"><h5>Topics</h5>
                     <div className="f-t-th-a">HTML</div>
                     <div className="f-t-th-b">CSS</div>
                     <div className="f-t-th-c">PYTHON</div>
                     <div className="f-t-th-d">JAVA</div>
                     </div>
                     <div className="f-t-four">
                         <div className="f-t-fo-a"><h5>Get in Touch</h5></div>
                         <div className="f-t-fo-b">123 Fifth Ave, New York,NY 12004, USA.</div>
                         <div className="f-t-fo-c">444-6-7-876-</div>
                         <div className="f-t-fo-d">mail@xyz.com</div>
                     </div>
                 </div>
                 <div className="footer-bottom">
                     <div className="footer-line"></div>
                     <div className="foot">
                     <div className="footer-end-1">
                     Copyright © 2020 Online Programming Course
                     </div>
                     <div className="footer-end-2">
                     Powered by Online Programming Course
                     </div>
                     </div>
                 </div>
            </div>

        </div>
    )
}
