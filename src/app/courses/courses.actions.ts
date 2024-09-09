import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

// resolver is going to get the courses
export const loadAllCourses = createAction(
  "[Courses Resolver] Load All Courses"
);

// effect is going dispatch those data to store in store
export const allCoursesLoaded = createAction(
  "[Load Courses Effect] All Cources Loaded",
  props<{ courses: Course[] }>()
);
