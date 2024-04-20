import crypto from 'crypto'


// Function to decrypt a message
export function decrypt(encryptedData, key, iv, tag) {
    const decipher = crypto.createDecipheriv('chacha20poly1305', key, iv.toString('hex'));
    decipher.setAuthTagLength(16); // Set authentication tag length
    decipher.setAuthTag(tag.toString('hex')); // Set the authentication tag
  
    let decryptedMessage = decipher.update(encryptedData, 'hex', 'utf8');
    try {
      decryptedMessage += decipher.final('utf8');
    } catch (error) {
      console.error('Decryption failed: Invalid authentication tag');
      return null; // Handle decryption error (likely due to invalid tag)
    }
    return decryptedMessage;
  }