import React from 'react'
import style from './Contacts.module.css';
import { getImageUrl } from '../../utils';

const Contacts = () => {
  return (
    <footer className={style.container} id='contacts'>
        <div className={style.content}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={style.contacts}>
            <li className={style.contact}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:anki7405@gmail.com">anki7405@gmail.com</a>
            </li>
            <li className={style.contact}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/ankit-malviya-91a137148">linkedin/ankit-malviya</a>
            </li>
            <li className={style.contact}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/Ankit7405">github/ankit-malviya</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contacts
