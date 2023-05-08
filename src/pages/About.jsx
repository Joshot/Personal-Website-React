// Import Components
import Navbar from "../components/Navbar";

// Import skill
import communication from '../images.skill/communication.jpg'
import dayspic from '../images/project/7daysPic.jpg';
import prototipe from '../images/project/prototipe.jpg';
import umnlife from '../images/project/umnLife.jpg';
import saya from '../images/project/Profile.jpg';

// Import React Stuff
import { StrictMode } from "react";
import { motion } from "framer-motion";
import $ from 'jquery';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
    $('body').css('backgroundColor', '#F1F1F1');
    const navigate = useNavigate();
    return (
        <StrictMode>
            <Navbar />
            <main id="main" className="{ container }">
                <div id="whatIsSevendays" className="penjelasan">
                    <div className="leftSection">
                        <img src={saya} alt="sayaGanteng" id="sayakeren" />
                    </div>
                    <div className="rightSection">
                        <h3>Hi,<br /> Saya Joshua Hotama</h3>
                        <p>I am currently studying at Universitas Multimedia Nusantara 4th semester in Informatics Engineering Major, I like technology, therefore I try to explore this technology. My focus is in the field of technology, I have skills in Design, Web Development and Leadership. My passion is in Graphic Design by using Figma, I can make Prototypes.</p>
                    </div>
                </div>
                <div id="project" className="project">
                    <h1>My Skills</h1>
                    <motion.div whileHover={{rotate: 1}} className="topSection">
                        <p>SThis is a skill that I have mastered for now, for the future my skills will continue to grow. <br />
                        this is not the end, this is just the beginning of other things.</p>
                    </motion.div>
                    <div className="skill1">
                        <div id="left" className="square">
                            <img src={dayspic} class="imgPro"/>
                            <p>Permainan website simulasi kehidupan mahasiswa dari 0 hingga 7 hari</p>
                        </div>
                        <div id="mid" className="square">
                            <img src={umnlife} class="imgPro"/>
                            <p>Permainan website simulasi kehidupan mahasiswa dari semester 1 hingga semester 8</p>
                        </div>
                        <div id="right" className="square">
                            <img src={prototipe} class="imgPro"/>
                            <p>Sebuah prototipe desain E-Learning yang dibuat menggunakan Figma</p>
                        </div>
                    </div>
                    <div className="skill2">
                        <div id="right" className="square">
                            <img src={dayspic} class="imgPro"/>
                            <p>Permainan website simulasi kehidupan mahasiswa dari 0 hingga 7 hari</p>
                        </div>
                        <div id="left" className="square">
                            <img src={umnlife} class="imgPro"/>
                            <p>Permainan website simulasi kehidupan mahasiswa dari semester 1 hingga semester 8</p>
                        </div>
                        <div id="mid" className="square">
                            <img src={prototipe} class="imgPro"/>
                            <p>Sebuah prototipe desain E-Learning yang dibuat menggunakan Figma</p>
                        </div>
                    </div>
                    <div className="skill3">
                        <div id="mid" className="square">
                            <img src={dayspic} class="imgPro"/>
                            <p>Permainan website simulasi kehidupan mahasiswa dari 0 hingga 7 hari</p>
                        </div>
                        <div id="right" className="square">
                            <img src={umnlife} class="imgPro"/>
                            <p>Permainan website simulasi kehidupan mahasiswa dari semester 1 hingga semester 8</p>
                        </div>
                        <div id="left" className="square">
                            <img src={prototipe} class="imgPro"/>
                            <p>Sebuah prototipe desain E-Learning yang dibuat menggunakan Figma</p>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="insideFooter">
                        <h1>©Joshua Hotama 2023 | Personal Website</h1>
                    </div>
                </footer>
            </main>
        </StrictMode>
    );
}
 
export default Home;
