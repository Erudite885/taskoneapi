import { useEffect, useState } from "react";
import { Dropdown, Input } from "antd";

type IProps = {
  label?: string;
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};


const FormDropdown = ({
  label,
  placeholder,
  options,
  onChange,
  value,
  disabled,
}: IProps) => {
  const [selected, setSelected] = useState<string | null | undefined>(
    value || null
  );

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const optionsMapping: { [T: string]: string } = {};
  const allOptions = options.map((option) => {
    optionsMapping[option.value as string] = option.label;

    return {
      label: option.label,
      key: option.value,
      onClick: () => {
        onChange && onChange(option.value);
        setSelected(option.value);
      },
      className: "form-question-dropdown-item",
    };
  });

  return (
    <div>
      {label && <label>{label}</label>}
      <Dropdown
        disabled={disabled}
        trigger={["click"]}
        className="bg-primary w-full p-[17px_26px] rounded-[5px] bg-white border-black border-[1px]"
        overlayClassName="form-question-dropdown"
        menu={{
          items: allOptions,
          selectedKeys: [selected || ""],
        }}
      >
        <Input
          readOnly
          className="flex items-center p-0 h-full font-[500]"
          placeholder={placeholder}
          value={
            selected && Object.keys(optionsMapping).includes(selected)
              ? optionsMapping[selected]
              : ""
          }
        />
      </Dropdown>
    </div>
  );
}

export default FormDropdown