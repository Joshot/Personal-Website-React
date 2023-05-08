// Import Components
import Navbar from "../components/Navbar";

// Import Photos
import dayspic from '../images/project/7daysPic.jpg';
import prototipe from '../images/project/prototipe.jpg';
import umnlife from '../images/project/umnLife.jpg';
import umnPerson from '../images/umn-person.png';
import sevendayslogo from '../images/project/logo.png';

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
            <header>
                <motion.div initial={{x: '-100vw'}} animate={{x: 0}} transition={{type: 'spring', duration: 1, bounce: 0.3}} className="leftSide">
                    <h1>Joshua Hotama</h1>
                    <h5>Saya mahasiswa Universitas Multimedia Nusantara semester 4, Program studi Informatika.</h5>
                    <button onClick={() => navigate('../images/cv/cv.pdf')} type="button">Play</button>
                </motion.div>
                <motion.div whileHover={{scale: 1.1, rotate: 12}} initial={{x: '100vw'}} animate={{x: 0}} transition={{type: 'spring', duration: 1, bounce: 0.3}} className="rightSide">
                    <img src={sevendayslogo} alt="joshot" />
                </motion.div>
            </header>


            <main id="main" className="{ container }">
                <motion.div whileHover={{rotate: 1}} id="whatIsSevendays" className="what-is-sevendays">
                    <div className="leftSection">
                        <img src={umnPerson} alt="umn-guy" />
                    </div>
                    <div className="rightSection">
                        <h3>What is 7DAYS?</h3>
                        <p>It is a simulation that is specially designed to resemble the life of UMN students. You will experience the daily struggles that UMN students face for 7 days.</p>
                    </div>
                </motion.div>
                <div id="project" className="project">
                    <h1>My Project</h1>
                    <motion.div whileHover={{rotate: 1}} className="topSection">
                        <p>Saya memiliki beberapa project yang sudah saya lakukan selama masa kuliah yang sewaktu-waktu akan berubah</p>
                    </motion.div>
                    <div className="bottomSection">
                        <a href="instagram.com" class="button">
                        <motion.div whileHover={{rotate: 1}} id="left" className="square">
                            <img src={dayspic} class="imgPro"/>
                            <p>Permainan website simulasi kehidupan mahasiswa dari 0 hingga 7 hari</p>
                        </motion.div>
                        </a>
                        <a href="">
                        <motion.div whileHover={{rotate: 1}} id="mid" className="square">
                            <img src={umnlife} class="imgPro"/>
                            <p>Permainan website simulasi kehidupan mahasiswa dari semester 1 hingga semester 8</p>
                        </motion.div>
                        </a>
                        <a href="">
                        <motion.div whileHover={{rotate: 1}} id="right" className="square">
                            <img src={prototipe} class="imgPro"/>
                            <p>Sebuah prototipe desain E-Learning yang dibuat menggunakan Figma</p>
                        </motion.div>
                        </a>
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
