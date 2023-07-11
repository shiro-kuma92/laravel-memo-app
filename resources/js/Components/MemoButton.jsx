const MemoButton = ({
  className = '',
  bordercolor,
  textcolor,
  hoverbg,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`py-2 px-4 border rounded-lg hover:text-white
        border-${bordercolor} 
        text-${textcolor}
        hover:bg-${hoverbg}
        ${disabled && 'opacity-25'}
        ${className}`}
    >
      {children}
    </button>
  );
};

export default MemoButton;
