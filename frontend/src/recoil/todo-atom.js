import { atom } from 'recoil'

export const completedArray_atom = atom({
    key:"completed_atom",
    default:null,
});

export const uncompletedArray_atom = atom({
    key:"uncompletedArray_atom",
    default:null,
});