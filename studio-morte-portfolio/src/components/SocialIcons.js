import { Icon } from '@iconify/react';
import './_socialicons.scss';


function SocialIcons(){

    return(
        <>
            <div className="social_container">
                <div className="social_icon">
                    <Icon icon="ant-design:instagram-filled" width="37px" color="#3a3a3a" />
                </div>
                <div className="social_icon">
                    <Icon icon="brandico:linkedin" width="30px" color="#3a3a3a" />
                </div>
                <div className="social_icon">
                    <Icon icon="bi:medium" width="40px" color="#3a3a3a"  />
                </div>
                <div className="social_icon">
                    <Icon icon="mingcute:github-fill" width="35px" color="#3a3a3a"  />
                </div>
            </div>
        </>
    )
}

export default SocialIcons