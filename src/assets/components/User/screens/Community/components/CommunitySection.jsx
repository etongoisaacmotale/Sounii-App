
import React, { Component } from "react";
import PostCard from "./PostCard.jsx";
import "./CommunitySection.css";

// Sample posts (replace with API later)
const samplePosts = [
    {
        id: 1,
        artist: "Dua Lipa",
        title: "New Album Out Now!",
        media: "https://via.placeholder.com/300", // image or video
        type: "image",
        content: "Check out my latest album. Hope you enjoy the vibes!",
        trending: true,
    },
    {
        id: 2,
        artist: "The Weeknd",
        title: "Behind the Scenes",
        media: "https://via.placeholder.com/300",
        type: "image",
        content: "Some photos from the studio. Stay tuned!",
        trending: true,
    },
    {
        id: 3,
        artist: "Billie Eilish",
        title: "New Single Release",
        media: "",
        type: "text",
        content: "My new single just dropped! Check it out.",
        trending: false,
    },
    {
        id: 4,
        artist: "Bruno Mars",
        title: "Tour Announcement",
        media: "",
        type: "text",
        content: "Excited to announce my world tour dates!",
        trending: false,
    },
];

export default class CommunitySection extends Component {
    constructor(props) {
        super(props);
        const storedData = JSON.parse(localStorage.getItem("communityPosts")) || samplePosts;
        this.state = {
            filter: "trending", // trending, latest, byArtist
            posts: storedData,
        };
    }

    setFilter = (filter) => {
        this.setState({ filter });
    };

    updatePost = (updatedPost) => {
        const updatedPosts = this.state.posts.map((post) =>
            post.id === updatedPost.id ? updatedPost : post
        );
        this.setState({ posts: updatedPosts }, () => {
            localStorage.setItem("communityPosts", JSON.stringify(updatedPosts));
        });
    };

    render() {
        const { filter, posts } = this.state;

        // Trending carousel
        const trendingPosts = posts.filter((p) => p.trending);

        // Filtered posts
        let filteredPosts = [];
        if (filter === "trending") filteredPosts = trendingPosts;
        else if (filter === "latest") filteredPosts = posts;
        else if (filter === "byArtist") {
            const artists = [...new Set(posts.map((p) => p.artist))];
            filteredPosts = artists.flatMap((artist) => posts.filter((p) => p.artist === artist));
        }

        return (
            <div className="community-wrapper">
                {/* Filter Tabs */}
                <div className="community-tabs">
                    {["trending", "latest", "byArtist"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => this.setFilter(tab)}
                            className={`community-tab-btn ${filter === tab ? "active" : ""
                                }`}
                        >
                            {tab === "trending"
                                ? "Trending"
                                : tab === "latest"
                                    ? "Latest"
                                    : "By Artist"}
                        </button>
                    ))}
                </div>

                {/* Trending Carousel */}
                {filter === "trending" && trendingPosts.length > 0 && (
                    <div className="community-carousel">
                        {trendingPosts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                updatePost={this.updatePost}
                                carousel
                            />
                        ))}
                    </div>
                )}

                {/* Post Feed */}
                <div className="community-feed">
                    {filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} updatePost={this.updatePost} />
                    ))}
                </div>
            </div>
        );

    }
}
