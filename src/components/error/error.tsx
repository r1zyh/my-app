interface IInputWithErrorProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className: string;
    error?: string | false;
  }
  
  export const InputWithError = ({
    className,
    error,
    ...props
  }: IInputWithErrorProps) => {
    return (
      <div>
        <input
          className={`${className} ${error ? "input__error" : ""}`}
          {...props}
        />
        {error && typeof error === 'string' && <div className="error__message">{error}</div>}
      </div>
    );
  };
  