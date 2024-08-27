import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Course } from "../model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action.types";

export interface CourseState extends EntityState<Course> {}

export const adapter = createEntityAdapter<Course>();
export const initialCourseState = adapter.getInitialState();

export const courseReducer = createReducer(
  initialCourseState,
  on(CourseActions.allCoursesLoaded, (state, action) =>
    adapter.addAll(action.courses, state)
  )
);

 export const {selectAll} = adapter.getSelectors();
