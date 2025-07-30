interface ButtonProps {
    lable: string
}
const Button = ({lable}: ButtonProps) => {
  return (
    <>
      <button className="px-4 py-2 tracking-wide bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-lg text-white text-sm transition-all duration-300 ease-in-out font-bold shadow-md text-shadow-md">
        {lable}
      </button>
    </>
  );
};

export default Button;
