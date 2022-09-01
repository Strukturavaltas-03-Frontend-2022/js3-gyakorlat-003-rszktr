const cookieHandler = {
    getAll() {
        const cookies = document.cookie.split('; ');
        const keys = [];
        const values = [];
        cookies.forEach(item => keys.push(item.split('=')[0]));
        cookies.forEach(item => values.push(item.split('=')[1]));

        return {
            [keys.shift()]: values.shift(),
            [keys.shift()]: values.shift(),
            [keys.shift()]: values.shift()
        }
    },
    toSessionStorage(){
        const cookies = document.cookie.split('; ');
        const keys = [];
        const values = [];
        cookies.forEach(item => keys.push(item.split('=')[0]));
        cookies.forEach(item => values.push(item.split('=')[1]));

        for (let i = 0; i < keys.length; i++) {
            sessionStorage.setItem(keys[i], values[i])
        }
    },
    flush(){
        const cookies = document.cookie.split('; ');
        const keys = [];
        cookies.forEach(item => keys.push(item.split('=')[0]));

        for (let i = 0; i < keys.length; i++) {
        document.cookie = `${keys[i]}=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        }
    },
}

export {
    cookieHandler
  }
