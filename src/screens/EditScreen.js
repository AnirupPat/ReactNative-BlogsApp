import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const EditScreen = ({ navigation }) => {
    console.log(navigation.getParam('id'));
    const { state } = useContext(Context);
    const BlogPost = state.find((blog) => { 
        return blog.id === navigation.getParam('id');
     });

    
    return (
        <BlogPostForm />
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