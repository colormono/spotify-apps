import actionsEnum from './actionsEnum';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=C0L0RM0N0';

export function sendContactForm(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(callback);

  return {
    type: actionsEnum.SEND_CONTACT_FORM,
    payload: values
  };
}
