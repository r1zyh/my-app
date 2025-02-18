interface ISelectWithErrorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className: string;
  error?: string | false;
}

export const SelectWithError = ({
  className,
  error,
  children,
  ...props
}: ISelectWithErrorProps) => {
  return (
    <>
      <select
        className={`${className} ${error ? "input__error" : ""}`}
        {...props}
      >
        {children}
      </select>
      {error && typeof error === "string" && (
        <div className="error__message">{error}</div>
      )}
    </>
  );
};
