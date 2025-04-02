import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Wordpress",
    "Elementor",
    "PHP",
    "mySQL",
    "MongoDB",
    "Woocommerce",
    "Express"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "AWS",
    "cPanel",
    "Google Cloud Build"
];

const labelsThird = [
    "OpenAI",
    "LangChain",
    "Hugging Face",
    "Llama",
    "Streamlit",
    "Qwen",
    "Koboldllm",
    "Gemma",
    "Mistral",
    "Stable Diffusion"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using technologies such as Vanilla PHP, JavaScript, WordPress with Elementor, React.js, and Node.js. I have a strong proficiency in the Software Development Life Cycle (SDLC) process, covering both frontend and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>After the application is complete, I partner with clients to implement robust DevOps testing, establish CI/CD pipelines, and automate deployment processes, ensuring a smooth and successful launch.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Keep pace with evolving technology by integrating advanced AI models into your projects. I bring professional experience in developing enterprise-grade GenAI and LLM solutions designed to enhance smart decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;