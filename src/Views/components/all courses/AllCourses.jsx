import { selectAllCourses } from "../../../redux/courses/selectors";
import { useSelector } from "react-redux";
import CourseBlock from "../../components/course block/CourseBlock";
import getNormalDate from "../../../utils/getNormalDate";
import sortCourses from "../../../utils/sortCourses"

function AllCoursesComponent() {
  const courses = useSelector(selectAllCourses);
  return courses?.filter((course) => {
      return !course?.tags?.includes("hidden");
    })
    .sort((a, b) => sortCourses(a, b))
    .map((course, i) => {
      return (
        <CourseBlock
          title={course.title}
          description={course.description}
          tags={course.tags}
          date={getNormalDate(course.created_at)}
          Image={course.picture_src}
          id={course._id}
          key={i}
          href={"/registration"}
        />
      );
    });
}

export default AllCoursesComponent;
