import { IFormQuestionType } from "./interface";

const formTypeMapping: Record<IFormQuestionType, string> = {
  Paragraph: "Paragraph",
  ShortAnswer: "Short Answer",
  YesNo: "Yes or No",
  Dropdown: "Dropdown",
  MultipleChoice: "Multiple Choice",
  Date: "Date",
  Number: "Number",
  FileUpload: "File Upload",
  Video: "Video question",
};

export default formTypeMapping;
