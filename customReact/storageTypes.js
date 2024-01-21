const user = { name: "akshay singh" };
// problem
localStorage.setItem("user", user);
// in backend what's happening // String(user)
console.log(localStorage.getItem("user"));

// because localstorage always store data in string so we need to stringify our object to save in LS
localStorage.setItem("user2", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user2")));
console.log(JSON.parse(localStorage.getItem("user2")).name);

// function setLocalStorageData('user'){JSON}
// function getLocalStorageData('user'){JSON}

sessionStorage.setItem("user", user);


// cookies
// have low capacity and only use for auth info for session , have limited benefits
// 4kb 
// expire acc to settings and usage of each tab and window
// can be read by both client & servers
//  data flow to server


// localstorage
// 5-10mb
// expire manually not sesion based
// can be read by client
// no data flow to server

// session storage
// 5mb
// works per win / tab and is session based
// can be read by client
// no data flow to server

