import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    // const blogPosts = [
    //     { title: "Blog Post #1" },
    //     { title: "Blog Post #2" },
    //     { title: "Blog Post #3" }
    // ];

    const [blogPosts, setBlogPost] = useState([]);

    const addBlogPost = () => {
        setBlogPost([...blogPosts, {title: `Blog Post #${blogPosts.length+1}`} ])
    };

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }} >
        {children}
    </BlogContext.Provider>
};

export default BlogContext;