import { FaBed, FaBook, FaChalkboardTeacher } from "react-icons/fa";

export const storyTypeList = [
  {
    id: 1,
    label: "Bed Story",
    isFree: true,
    icon: <FaBed size={30} color="red" />,
  },
  {
    id: 2,
    label: "Story Book",
    isFree: true,
    icon: <FaBook size={30} color="red" />,
  },
  {
    id: 3,
    label: "Educational",
    isFree: true,
    icon: <FaChalkboardTeacher size={30} color="red" />,
  },
];
export const storyUsersList = [
  {
    id: 1,
    label: "0-4 years",
    isFree: true,
    icon: <FaBed size={30} color="red" />,
  },
  {
    id: 2,
    label: "4-7 years",
    isFree: true,
    icon: <FaBook size={30} color="red" />,
  },
  {
    id: 3,
    label: "7-10 years",
    isFree: true,
    icon: <FaChalkboardTeacher size={30} color="red" />,
  },
];
export const storyImageList = [
  {
    id: 1,
    label: "3D Cartoon",
    isFree: true,
    icon: <FaBed size={30} color="red" />,
  },
  {
    id: 2,
    label: "Paper Cut",
    isFree: true,
    icon: <FaBook size={30} color="red" />,
  },
  {
    id: 3,
    label: "Water Color",
    isFree: true,
    icon: <FaChalkboardTeacher size={30} color="red" />,
  },
  {
    id: 3,
    label: "Pixel Style",
    isFree: true,
    icon: <FaChalkboardTeacher size={30} color="red" />,
  },
];

export interface StoryType {
  id: number;
  label: string;
  isFree: boolean;
  icon: JSX.Element;
}
export interface StoryUser {
  id: number;
  label: string;
  isFree: boolean;
  icon: JSX.Element;
}

export interface StoryImage {
  id: number;
  label: string;
  isFree: boolean;
  icon: JSX.Element;
}
