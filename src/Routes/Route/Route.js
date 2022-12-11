import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Blog from "../../Pages/Blog/Blogs/Blog";
import Home from "../../Pages/Home/Home/Home";



const router = createBrowserRouter([
    {
        path: '/', element: <Main > </Main>,
        children: [
            {
                path: '/' , element:<Home  > </Home>
            },
            {
                path: '/home' , element:<Home  > </Home>
            },
            {
                path: '/blog' , element: <Blog > </Blog>
            },
            {
                path:'/aboutme', element: <AboutMe> </AboutMe>
            }
        ]
    }
])

export default router ;