import React from 'react';

const Preview = () => {
    return (
        <div className="preview">
            <h3>LinkedIn</h3>
            <div className="post-preview">
                <div className="profile">
                    <img src="/home/nikunj/Desktop/banner.jpeg" alt="Profile" />
                    <div className="profile-info">
                        <span className="profile-name">Nikunj Chhabra</span>
                        <span className="post-time">Just now</span>
                    </div>
                </div>
                <div className="post-actions">
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Preview;
