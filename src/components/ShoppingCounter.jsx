export default function ShoppingCounter({ amount }) {
  if (amount === 0) {
    return null;
  }

  return (
    <div className="bg-red-600 h-5 w-5 mx-2 flex justify-center items-center ">
      {amount}
    </div>
  );
}
