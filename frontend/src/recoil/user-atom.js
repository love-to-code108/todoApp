import { atom } from 'recoil'



const userName_atom = atom({
    key: 'userName_atom',
    default: '',
  });



export const userPassword_atom = atom({
    key: 'userPassword_atom',
    default: '',
  });



export const userEmail_atom = atom({
    key: 'userEmail_atom',
    default: '',
  });


  export default userName_atom ;