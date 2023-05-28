interface InputProps {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // adicione esta linha
  }
  
  const Input: React.FC<InputProps> = ({ id, name, type, placeholder,value, className, onChange }) => {
    return (
      <div className={`input_control ${className}`}>
        <input 
          type={type} 
          name={name} 
          id={id}
          value={value} 
          className="inputLogin"
          placeholder={placeholder}
          onChange={onChange} // adicione esta linha
        />
        <small></small>
      </div>
    );
  }

export default Input;
