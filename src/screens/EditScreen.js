import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);
    const BlogPost = state.find((blog) => { 
        return blog.id === id;
     });

    
    return (
        <BlogPostForm 
            initialValues={{ title: BlogPost.title, content: BlogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(title, content, id, () => navigation.pop() )
            }} />
    )
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
        padding: 5
    },
    row: {
        flexDirection: "column",
        alignContent: "space-between",
        margin: 10
    },
    label: {
        fontSize: 18
    }
});

export default EditScreen;