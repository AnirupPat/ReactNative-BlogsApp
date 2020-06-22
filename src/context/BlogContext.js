import CreateDataContext from './createDataContext';

const BlogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((post) => {
                return post.id === action.payload.id ? action.payload : post;
            })
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload: { title, content }});
        if(callback) {
            callback();
        }
    };
};

const editBlogPost = dispatch => {
    return (title, content, id, callback) => {
        console.log(title);
        dispatch({type: 'edit_blogpost', payload: { title, content, id }});
        if(callback) {
            callback();
        }
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
};

export const { Context, Provider } = CreateDataContext(
    BlogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost },
    []
);