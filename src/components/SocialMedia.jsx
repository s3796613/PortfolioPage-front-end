import React from 'react'
import {FaFacebookF, FaLinkedin, FaGithub} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/thang-nguyen899' target="_blank" rel='noreferrer'>
            <FaLinkedin />
            </a>
        </div>
        <div>
            <a href='https://www.facebook.com/quoc.thang.1428' target="_blank" rel='noreferrer'>
            <FaFacebookF />
            </a>
        </div>
        <div>
            <a href='https://github.com/s3796613' target="_blank" rel='noreferrer'>
            <FaGithub />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia