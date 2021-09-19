import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  SET_ACTIVE_ACTIVITY,
  UPDATE_ACTIVITY,
} from "../actions/types";
import { v4 as uuid } from "uuid";

const initialState = {
  activities: [
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Jane Doe",
      date: Date.now(),
      shortDescription: "A description of one task that was done today",
      description:
        "So therе’s like this very interesting and very long description of an activity log card. I think it’s supposed to describe something about a task done today, but come on, we aren’t here to play games. Also, what do you think about the placement? Right alignment because consistency",
      imgs: [
        {
          id: uuid(),
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          id: uuid(),
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          id: uuid(),
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "John Smith",
      date: Date.now(),
      shortDescription: "A description of one task that was done today",
      description:
        "So therе’s like this very interesting and very long description of an activity log card. I think it’s supposed to describe something about a task done today, but come on, we aren’t here to play games. Also, what do you think about the placement? Right alignment because consistency",
      imgs: [
        {
          id: uuid(),
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          id: uuid(),
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          id: uuid(),
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Donald Kellam",
      date: Date.now(),
      shortDescription: "A description of one task that was done today",
      description:
        "So therе’s like this very interesting and very long description of an activity log card. I think it’s supposed to describe something about a task done today, but come on, we aren’t here to play games. Also, what do you think about the placement? Right alignment because consistency",
      imgs: [
        {
          id: uuid(),
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          id: uuid(),
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          id: uuid(),
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Donald Kellam",
      date: Date.now(),
      shortDescription: "A description of one task that was done today",
      description:
        "So therе’s like this very interesting and very long description of an activity log card. I think it’s supposed to describe something about a task done today, but come on, we aren’t here to play games. Also, what do you think about the placement? Right alignment because consistency",
      imgs: [
        {
          id: uuid(),
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          id: uuid(),
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          id: uuid(),
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
  ],
  activeActivity: null,
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };

    case SET_ACTIVE_ACTIVITY:
      return {
        ...state,
        activeActivity: action.payload,
      };

    case UPDATE_ACTIVITY:
      return {
        ...state,
        activities: action.payload.activities,
        activeActivity: action.payload.activity,
      };

    default:
      return state;
  }
}
