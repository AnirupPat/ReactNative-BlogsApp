import CreateDataContext from './createDataContext';

const BlogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];

        default:
            return state;
    }
};

const addBlogPost = () => {
    dispatch({type: 'add_blogpost'})
};

export const { Context, Provider } = CreateDataContext(
    BlogReducer,
    {addBlogPost},
    []
);