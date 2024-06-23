import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/profile');
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) return <p>Loading...</p>;

    return (
        <div>
            <h2>Profile</h2>
            <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
            <p><strong>Email:</strong> {profile.email}</p>
        </div>
    );
};

export default Profile;
