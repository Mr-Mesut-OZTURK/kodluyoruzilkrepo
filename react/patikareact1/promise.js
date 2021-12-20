import axios from "axios"



const getData = async (userId) => {

    const { data:user } = await axios("https://jsonplaceholder.typicode.com/users/" + userId)
    const { data:post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    // console.log({...user, post})
    return { ...user, post }

}

// getData(1)

export default getData