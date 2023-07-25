import CountContainer from './CountContainer';


import { useState } from 'react';
import axios from 'axios';
import "./GithubUserFinder.css";
import Table from './Table';


const GithubUserFinder = () => {
  const [username, setUsername] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  const [repos, setRepos] = useState([])

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setUserProfile(userResponse.data);
      setRepos(repoResponse.data)
      const finalRepos = repoResponse.data
      setRepos(finalRepos)
      console.log(repos)
      setError(null);
    } catch (error) {
      setUserProfile(null);
      setError('User not found. Please enter a valid GitHub username.');
    }
  };

  return (
    <div className="main-body">
      <div className="user-profile">
        {/* Header */}
        <h1 className="app-heading">Github User Finder</h1>
        <form onSubmit={handleSubmit} className="github-user-finder">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={handleChange}
          />
          <button type="submit">Find User</button>
        </form>

        {/* Error message if invalid user */}
        {error && <p style={{ color: "red",textAlign:"center" }}>{error}</p>}

        <div className="user-data">
          {/* Top Header displaying User profile pic, followers, following */}
          {userProfile && (
            <div>

              <h2>{userProfile.login}</h2>
              <img
                src={userProfile.avatar_url}
                alt={userProfile.login}
                style={{ width: "100px" }}
              />
              <p>{userProfile.bio}</p>


              {/* Count container */}
              {/* <div className="count-container">
                <div className="c1">
                  <h2>Followers </h2> <h1> {userProfile.followers}</h1>
                </div>
                <div className="c2">
                  <h2>Followers </h2> <h1> {userProfile.following}</h1>
                </div>
              </div> */}
              <CountContainer userProfile={userProfile} />

              <Table repos={repos} />
          
                
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

export default GithubUserFinder;
