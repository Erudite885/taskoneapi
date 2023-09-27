import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ICustomFormQuestion } from "./interface";
import FormCustomQuestion from "./formCustomQuestion";
import EditIcon from "../../assets/icons/edit-icon.svg";

type IProps = {
  formQuestion: ICustomFormQuestion;
  className?: string;
  helperText?: string;
  onQuestionUpdate?: (question: ICustomFormQuestion) => void;
  onQuestionDelete?: (question: ICustomFormQuestion) => void;
  disabledQuestions?: (keyof ICustomFormQuestion)[];
};

const FormCustomQuestionPreview = ({
  formQuestion,
  className,
  helperText,
  onQuestionUpdate,
  onQuestionDelete,
  disabledQuestions,
}: IProps) => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className={twMerge("py-[25px]", className)}>
      <p className="text-[#979797] mb-[5px]">{helperText}</p>
      <div className="grid grid-flow-col grid-cols-[auto_max-content] gap-[52px]">
        <p className="font-[600] text-[20px]">{formQuestion.question}</p>
        <div
          className="cursor-pointer"
          onClick={() => {
            setShowEditForm(!showEditForm);
          }}
        >
          <img src={EditIcon} alt="edit icon" />
        </div>
      </div>

      {showEditForm && (
        <FormCustomQuestion
          className="shadow-[3px_14px_0px_rgba(190,190,190,0.30)]"
          contentOnly
          question={formQuestion}
          disabledQuestions={disabledQuestions}
          onClose={() => {
            setShowEditForm(false);
          }}
          onDelete={(question) => {
            onQuestionDelete && onQuestionDelete(question);
          }}
          onSave={(question) => {
            console.log(question);
            onQuestionUpdate && onQuestionUpdate(question);
            setShowEditForm(false);
          }}
        />
      )}
    </div>
  );
};

export default FormCustomQuestionPreview;
