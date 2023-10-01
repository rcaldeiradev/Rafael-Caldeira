interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-gray-200 hover:bg-gray-300 ${className}`}
    >
      {text}
    </button>
  );
}
