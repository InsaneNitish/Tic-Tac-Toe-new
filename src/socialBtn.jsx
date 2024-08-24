import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Social(){
    return(
        <div className="Social">
            <div className="social-container">
                <a href="https://www.github.com/InsaneNitish/"><i><GitHubIcon></GitHubIcon></i></a>
                <a href="https://www.instagram.com/insanenitish/"><i><InstagramIcon></InstagramIcon></i></a>
                <a href="https://x.com/NitishTechYT/"><i><XIcon></XIcon></i></a>
                <a href="https://www.linkedin.com/in/code-sane?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i><LinkedInIcon></LinkedInIcon></i></a>
            </div>
        </div>
    )
}

export default Social;