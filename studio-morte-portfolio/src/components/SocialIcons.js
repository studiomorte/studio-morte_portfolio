import { Icon } from '@iconify/react';

function SocialIcons(){

    return(
        <>
            <div className="social_container">
                <a href="https://www.instagram.com/studiomorte/"  className="social_icon">
                    <Icon icon="ant-design:instagram-filled" width="37px" />
                </a>
                <a href="https://www.linkedin.com/in/studiomorte/"  className="social_icon">
                    <Icon icon="brandico:linkedin" width="30px" />
                </a>
                <a href="https://medium.com/@studiomorte"  className="social_icon">
                    <Icon icon="bi:medium" width="40px"   />
                </a>
                <a href="https://github.com/studiomorte" className="social_icon">
                    <Icon icon="mingcute:github-fill" width="35px"   />
                </a>
                <a href="https://codepen.io/studiomorte" className="social_icon">
                    <Icon icon="ph:codepen-logo-fill" width="39px" />
                </a>
            </div>
        </>
    )
}

export default SocialIcons