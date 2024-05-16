import React from 'react';
import '../styles/TeamMember.css'; 

const TeamMember = ({ name, position, description, imageUrl, socialLinks }) => {
    return (
        <div className="team-member">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>Position: {position}</p>
            <p>About: {description}</p>
            <div className="social-links">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.url}><img src={link.icon} alt={link.name} /></a>
                ))}
            </div>
        </div>
    );
};

export default TeamMember;
