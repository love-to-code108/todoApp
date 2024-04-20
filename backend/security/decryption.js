import CryptoJS from 'crypto-js';



export const decryptObject = (encryptedData, secretKey) => {
  // Decrypt the encrypted data using AES decryption with the secret key
  const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey);
  
  // Convert the decrypted data to a UTF-8 string
  const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
  
  // Parse the decrypted JSON string back into an object
  const decryptedObject = JSON.parse(decryptedString);
  
  return decryptedObject;
};
