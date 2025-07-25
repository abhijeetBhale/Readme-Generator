import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const UserShowcaseSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample showcase users data
  const showcaseUsers = [
    {
      name: "Anshul Kavishwar",
      githubUsername: "Anshulkavi",
      date: "2025-06-30"
    },
    {
      name: "Abhijeet Bhale",
      githubUsername: "abhijeetBhale",
      date: "2025-06-30"
    },
    {
      name: "Vanshika Joshi",
      githubUsername: "vanshikajoshi06",
      date: "2025-06-30"
    },
    {
      name: "Dhaval Shah",
      githubUsername: "dhavalshahh",
      date: "2025-07-2"
    },
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const userPromises = showcaseUsers.map(async (user) => {
          try {
            const response = await fetch(`https://api.github.com/users/${user.githubUsername}`);
            if (response.ok) {
              const data = await response.json();
              return {
                ...user,
                avatarUrl: data.avatar_url,
                githubUrl: data.html_url,
                bio: data.bio || '',
                publicRepos: data.public_repos,
                followers: data.followers
              };
            } else {
              // Fallback if API call fails
              return {
                ...user,
                avatarUrl: `https://github.com/${user.githubUsername}.png`,
                githubUrl: `https://github.com/${user.githubUsername}`,
                bio: '',
                publicRepos: 0,
                followers: 0
              };
            }
          } catch (error) {
            console.error(`Error fetching data for ${user.githubUsername}:`, error);
            // Fallback for individual user errors
            return {
              ...user,
              avatarUrl: `https://github.com/${user.githubUsername}.png`,
              githubUrl: `https://github.com/${user.githubUsername}`,
              bio: '',
              publicRepos: 0,
              followers: 0
            };
          }
        });

        const userData = await Promise.all(userPromises);
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback to original data
        setUsers(showcaseUsers.map(user => ({
          ...user,
          avatarUrl: `https://github.com/${user.githubUsername}.png`,
          githubUrl: `https://github.com/${user.githubUsername}`,
          bio: '',
          publicRepos: 0,
          followers: 0
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="card" id="user-showcase">
      <h2 className="text-2xl font-bold mb-4" style={{textAlign: 'center', fontSize: '3rem', marginBottom: '20px'}}>
        User Showcase
      </h2>
      <p className="text-gray-700 mb-6" style={{textAlign: 'center', fontSize: '1.1rem'}}>
        Amazing developers who have used our README Generator to create stunning profiles!
      </p>
      
      {/* User Cards in Static Grid Layout */}
      <div className="mb-6" style={{ 
        maxWidth: '2000px', 
        margin: '0 auto', 
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '20px'
      }}>
        {loading ? (
          // Show loading cards while fetching data
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            gap: '20px', 
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          }}>
            {showcaseUsers.map((user, index) => (
              <UserCard key={index} user={user} loading={true} />
            ))}
          </div>
        ) : (
          // Show actual user cards with GitHub data
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            gap: '20px', 
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          }}>
            {users.map((user, index) => (
              <UserCard 
                key={index} 
                user={user} 
                loading={false} 
              />
            ))}
          </div>
        )}
      </div>
      
      <div 
        className="text-center p-6 rounded-lg border"
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderColor: '#0ea5e9',
          boxShadow: '0 4px 12px rgba(14, 165, 233, 0.1)',
          padding: '20px',
          borderRadius: '10px',
          margin: '0 auto',
          maxWidth: '1200px',
          textAlign: 'center'
        }}
      >
        <p className="text-gray-800 mb-2" style={{fontSize: '1.1rem', fontWeight: '600'}}>
          Want to be featured here?
        </p>
        <p className="text-gray-600 text-sm">
          Simply check the "I'd love to be featured in the user showcase!" option when generating your README!
        </p>
      </div>
    </div>
  );
};

const UserCard = ({ user, loading }) => {
  if (loading) {
    return (
      <StyledWrapper>
        <div className="card-client">
          <div className="user-picture">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>
          </div>
          <p className="name-client">Loading...
            <span>Loading user data...</span>
          </p>
          <div className="social-media">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
              <span className="tooltip-social">Twitter</span>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <span className="tooltip-social">Instagram</span>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <span className="tooltip-social">Facebook</span>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
              <span className="tooltip-social">LinkedIn</span>
            </a>
          </div>
        </div>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <div className="card-client">
        <div className="user-picture">
          <img 
            src={user.avatarUrl} 
            alt={`${user.name}'s profile`}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </div>
        <p className="name-client">
          {user.name}
          <span>@{user.githubUsername}</span>
        </p>
        <div className="social-media">
          <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="tooltip-social">GitHub</span>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-client {
    background: #2cb5a0;
    min-width: 13rem;
    width: auto;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 20px;
    padding-right: 20px;
    border: 4px solid #7cdacc;
    box-shadow: 0 6px 10px rgba(207, 212, 222, 1);
    border-radius: 10px;
    text-align: center;
    color: #fff;
    font-family: "Poppins", sans-serif;
    transition: all 0.3s ease;
    margin-bottom: 20px;
    margin-left: 35px;
  }

  // .card-client:hover {
  //   transform: translateY(-10px);
  // }

  .user-picture {
    overflow: hidden;
    object-fit: cover;
    width: 5rem;
    height: 5rem;
    border: 4px solid #7cdacc;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .user-picture svg {
    width: 2.5rem;
    fill: currentColor;
  }

  .name-client {
    margin: 0;
    margin-top: 20px;
    font-weight: 600;
    font-size: 18px;
  }

  .name-client span {
    display: block;
    font-weight: 200;
    font-size: 16px;
  }

  .social-media:before {
    content: " ";
    display: block;
    width: 100%;
    height: 2px;
    margin: 20px 0;
    background: #7cdacc;
  }

  .social-media a {
    position: relative;
    margin-right: 15px;
    text-decoration: none;
    color: inherit;
  }

  .social-media a:last-child {
    margin-right: 0;
  }

  .social-media a svg {
    width: 1.7rem;
    height: 1.7rem;
    fill: currentColor;
  }

  /*-- Tooltip Social Media --*/
  .tooltip-social {
    background: #262626;
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 0.5rem 0.4rem;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -90%);
    transition: all 0.2s ease;
    z-index: 1;
  }

  .tooltip-social:after {
    content: " ";
    position: absolute;
    bottom: 1px;
    left: 50%;
    border: solid;
    border-width: 10px 10px 0 10px;
    border-color: transparent;
    transform: translate(-50%, 100%);
  }

  .social-media a .tooltip-social:after {
    border-top-color: #262626;
  }

  .social-media a:hover .tooltip-social {
    opacity: 1;
    transform: translate(-50%, -130%);
  }
`;

export default UserShowcaseSection; 