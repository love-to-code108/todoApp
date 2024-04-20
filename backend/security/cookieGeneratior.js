import crypto from "crypto"

export const cookieGenerator = () => {

    const randomBytes = crypto.randomBytes(8);
    const hexString = randomBytes.toString('hex');
    return hexString.padStart(32, '0');

}