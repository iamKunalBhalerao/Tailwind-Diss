interface SecondaryButtonProps {
  lable: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
const SecondaryButton = ({
  lable,
  startIcon,
  endIcon,
}: SecondaryButtonProps) => {
  return (
    <>
      <button className="px-4 flex items-center gap-2 py-2 tracking-wide bg-transparent hover:bg-slate-200 cursor-pointer rounded-md text-black text-sm transition-all duration-200 ease-in-out font-bold">
        {startIcon}
        {lable}
        {endIcon}
      </button>
    </>
  );
};

export default SecondaryButton;
