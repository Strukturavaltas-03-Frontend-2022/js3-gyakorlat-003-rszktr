const setCookie = (string) => {
    const expires = new Date(Date.now()+900000).toUTCString();
    document.cookie = `token=${string}; expires=${expires}`
}

export default setCookie;
