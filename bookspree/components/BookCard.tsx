
interface BookCardProps {
    id: string;
    cover: string;
    title: string;
    author: string;
    quantity: number;
    onRemove: (id: string) => void;
  }
  
  const BookCard = ({ id, cover, title, author, quantity, onRemove }: BookCardProps) => {
    return (
      <div className="flex flex-col items-center p-4 border rounded-md shadow-md bg-white">
        <img src={cover} alt={`${title} cover`} className="w-32 h-48 object-cover mb-4" />
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-700">{author}</p>
        <p className="mt-1">Quantity: {quantity}</p>
        <button
          className="mt-4 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
      </div>
    );
  };
  
  export default BookCard;
  