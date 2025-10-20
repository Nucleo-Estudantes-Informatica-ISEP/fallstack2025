"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  center?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  center,
  placeholder,
  className,
  disabled,
  inputRef,
  type = "text",
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col">
      <label
        className={`${center ? "mb-4 text-center" : ""} text-white`}
        htmlFor={name}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
        }}
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        ref={inputRef}
        className={`focus:border-primary rounded-md border border-gray-400 px-3 py-2 text-black focus:ring-0 disabled:text-gray-600 ${className ?? ""}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
