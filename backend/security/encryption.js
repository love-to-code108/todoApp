import crypto from 'crypto'



// Function to encrypt a message
export function encrypt(message, key) {
    const iv = crypto.randomBytes(12); // Generate a random 12-byte initialization vector
  
    const cipher = crypto.createCipheriv('chacha20poly1305', key, iv);
    cipher.setAuthTagLength(16); // Set authentication tag length (default 16 bytes)
  
    let encryptedData = cipher.update(message, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
  
    const tag = cipher.getAuthTag(); // Get the authentication tag
  
    return {
      data: encryptedData,
      iv: iv.toString('hex'),
      tag: tag.toString('hex'),
    };
  }