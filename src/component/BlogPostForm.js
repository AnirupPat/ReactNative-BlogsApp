import React, { useState } from 'react';
import { View, Text, TextInput,StyleSheet, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={styles.label}>Enter Content: </Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />

            <Button 
                onPress={() => onSubmit(title, content)}
                title="Save Blog Post" />
        </View>
    )
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        padding: 5
    },
    label: {
        marginVertical: 10,
        fontSize: 20
    },
    container: {
        margin: 10
    }
});

export default BlogPostForm;