import axios from 'axios';
import _ from 'lodash';
import querystring from 'querystring';

const apiBase = axios.create({ baseURL: `http://localhost:3000/api/` });

export default {


  /**
   * Register a new user
   *
   * @param {String} user - the user object
   */
  registerUser (user) {

    return apiBase.post(
      `/auth/register`,
      querystring.stringify(user),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    ).then((res) => {
      return res.data;
    });
  },



}
