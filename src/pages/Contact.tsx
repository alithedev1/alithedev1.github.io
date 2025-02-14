import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <div className="flex space-x-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+923020555361"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon font-body"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/alithedev1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon font-body"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        {/* Phone */}
        <a
          href="tel:+923020555361"
          className="contact-icon font-body"
        >
          <FontAwesomeIcon icon={faPhone} />
        </a>

        {/* Email */}
        <a
          href="mailto:alithedevofficial@gmail.com"
          className="contact-icon font-body"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alithedev1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon font-body"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/alithedev1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon font-body"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
