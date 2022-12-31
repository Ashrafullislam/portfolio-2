import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Blog from "../../Pages/Blog/Blogs/Blog";
import Contact from "../../Pages/Home/ContactMe/Contact";
import Home from "../../Pages/Home/Home/Home";
import MyProjectsDetails from "../../Pages/Home/MyProjects/MyProjectsDetails/MyProjectsDetails";



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
            },
            {
                path: '/contact', element:<Contact> </Contact>
            },
           
            {
                path:'/myprojectsdetails/:id', 
                loader:({params}) => {
                return fetch(`https://my-portfolio-2-server.vercel.app/projects/${params.id}`)
                },
                element: <MyProjectsDetails > </MyProjectsDetails>
            }
        ]
    }
])

export default router ;