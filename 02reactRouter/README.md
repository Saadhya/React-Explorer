# React + Vite 

# run like
npm run dev

# notes
we should use Link (react-router-dom) only for links instead of <a> tag. Because it will do page reload which react doesn't support.

# ERROR: TypeError: Cannot destructure property 'future' of 'React.useContext(...)' as it is null.
- this is due to using react-router-dom in the application. And to execute all routes, we need to implement browserrouter() in react-app

# layout using outlet (react-router-dom) and  (react-redux)
- <outlet /> for all home components by keeping header and footer constant. So it will contain middle variable content.
using this only we can add nested elements in the router

# useparams()
- useparams() is used to fetch data from the url provided by user in the url like user/:userid
- useLoader() is used to fetch data from the loader of react-router from RouterProvider
(used in github pages)