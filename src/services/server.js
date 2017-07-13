import axios from 'axios';
import config from '../config';
import _ from 'lodash';

const apiBase = axios.create({ baseURL: `http://localhost:3000/api/` });



export default {


  /**
   * Register a new user
   *
   * @param {String} user - the user object
   */
  registerUser (user) {

    console.log(querystring.stringify({ user }));

    return apiBase.post(
      `/auth/register`,
      querystring.stringify({ user }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    ).then((res) => {
      return res.data;
    });
  },



}
