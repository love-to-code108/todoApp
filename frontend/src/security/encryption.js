import CryptoJS from 'crypto-js';


export const encryptObject = (objectToEncrypt, secretKey) => {
  // Convert object to JSON string
  const jsonString = JSON.stringify(objectToEncrypt);
  
  // Encrypt the JSON string using AES encryption with a secret key
  const encrypted = CryptoJS.AES.encrypt(jsonString, secretKey).toString();
  
  return encrypted;
};
