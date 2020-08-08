import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-b3c2d.firebaseio.com/'
});

export default instance;
