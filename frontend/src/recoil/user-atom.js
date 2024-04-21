import { atom } from 'recoil'



export const userName_atom = atom({
  key: 'userName_atom',
  default: null,
});



export const userPassword_atom = atom({
  key: 'userPassword_atom',
  default: null,
});



export const userEmail_atom = atom({
  key: 'userEmail_atom',
  default: null,
});


export const todoArray_atom = atom({
  key:"todoArray_atom",
  default:[],
});


export const todoInput_atom = atom({
  key:"todoInput_atom",
  default:'',
})

export const authState_atom = atom({
  key:"authState_atom",
  default: null,
})

