import * as api from '../api';


//redux thunk is used for asynchronous operation : for eg fetching posts take a long time
//so we use redux thunk
export const getPosts = () => async (dispatch) => {
    try{
        const {data} = await api.fetchPosts();

        const action = { type: 'FETCH_ALL', payload: data}
    //using thunk we dispatch the action instead of returning it
   
        dispatch(action);
    }catch(error){
        console.log(error.message)
    }


    
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        const action = {type: 'CREATE', payload: data};

        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}