import React from 'react';
import TeamMember from './TeamMember'; // Import your TeamMember component
import '../styles/TeamMember.css';  // Import your CSS file for styling

const TeamPage = () => {
    // Sample team member data
    const teamMembers = [
        {
            name: "William 'Mullet' Su ",
            position: "CEO",
            description: "William has been gaming since he was 8 years old, eventually competing in Counter-Strike: Global Offensive and Overwatch for 7 years before retiring. From competition to retirement, William learned many of the nuances in building a career in gaming from scratch. Currently, he sits as the Co-President of the University of Alberta Esports Association and graduated the RBC Gaming Grant Program hosted by Enthusiast Gaming where he started his talent management journey. William Su holds a Bcom from the University of Alberta Business school and is attending the University of Alberta as a 3rd year law student. William is currently on his path to fulfilling his dream of becoming a lawyer while fulfilling his passion in gaming.",
            imageUrl: "NSGlogo.png",
            socialLinks: [
                { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin-icon.png" },
                { name: "Twitter", url: "https://twitter.com/", icon: "twitter-icon.png" }
            ]
        },

        {
          name: "John Doe",
          position: "CEO",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageUrl: "NSGlogo.png",
          socialLinks: [
              { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin-icon.png" },
              { name: "Twitter", url: "https://twitter.com/", icon: "twitter-icon.png" }
          ]
      },

      {
        name: "John Doe",
        position: "CEO",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "NSGlogo.png",
        socialLinks: [
            { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin-icon.png" },
            { name: "Twitter", url: "https://twitter.com/", icon: "twitter-icon.png" }
        ]
    },
        // Add more team members as needed
    ];

    return (
        <div className="team-page">
            <h1>Our Team</h1>
            <div className="team-member">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        position={member.position}
                        description={member.description}
                        imageUrl={member.imageUrl}
                        socialLinks={member.socialLinks}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
