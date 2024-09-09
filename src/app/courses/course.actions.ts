import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";
import { Update } from "@ngrx/entity";

export const loadAllCourses = createAction("[Courses] Load All Courses");
export const allCoursesLoaded = createAction(
  "[Courses] All Courses Loaded",
  props<{ courses: Course[] }>()
);
export const loadAllCoursesFailure = createAction(
  "[Courses] Load All Courses Failure"
);
export const courseUpdated = createAction(
  "[Edit Course Dialogue] Course Updated",
  props<{ update: Update<Course> }>()
);
