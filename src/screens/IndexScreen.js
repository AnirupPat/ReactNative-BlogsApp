import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);
    return (
        <View>
            <Button title="Add Posts" onPress={addBlogPost} />
            <FlatList 
                data={state} 
                keyExtractor={(blogPost) =>  blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.row}>{item.title}</Text>
                            <Feather style={styles.icon} name="trash" />
                        </View>
                        
                    )
                }} />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;