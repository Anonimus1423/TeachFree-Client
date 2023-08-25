import Test from "../Views/main/Test";
import Result from "../Views/main/Result/Index.jsx";
import AllCourses from "../Views/main/AllCourses";
import AboutUs from "../Views/main/Lesson/About Us/AboutUs";

export const defaultRoutes = [
  {
    path: "/test",
    element: (
      <Test />
    ),
  },
  {
    path: "/test-results",
    element: <Result />,
  },
  {
    path: "/courses",
    element: <AllCourses />,
  },
  {
    path: "/courses/noreg/644239a5591008b1b2eff237/64d72a3c1731de3469ffc947",
    element: <AboutUs />,
  },
  
  
];
