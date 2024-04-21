


export const pullUSER = () => {

    
    const userFromSessionStorage = sessionStorage.getItem("USER");
    const USER = JSON.parse(userFromSessionStorage);
    return USER;
    
}
