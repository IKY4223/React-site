import About from "../pages/About";
import Login from "../pages/Login";
import PostidPage from "../pages/PostidPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', element: About, exact: true},
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostidPage, exact: true},
]

export const publicRoutes = [
    {path: '/about', element: Login, exact: false},
]