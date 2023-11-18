import { setWallet } from "../features/wallet/walletSlice";
import { connectWallet } from "../lib/Wallet";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet.value);

  return (
    <div>
      <div className="container mx-auto my-4 flex justify-between items-center">
        <a href="/" className="text-black font-bold text-4xl cursor-pointer">
          exa
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 inline-block text-transparent bg-clip-text">
            mina
          </span>
        </a>

        {wallet ? (
          <div className="flex gap-6 items-center">
            <a
              href="/create-exam"
              className="text-black font-medium cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-300"
            >
              Create Exam
            </a>
            <a
              href="/my-exams"
              className="text-black font-medium cursor-pointer hover:text-purple-700 transition-all ease-in-out duration-300"
            >
              My Exams
            </a>
          </div>
        ) : (
          <div
            onClick={() => {
              connectWallet().then((wallet) => {
                dispatch(setWallet(wallet));
              });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-2 rounded-full cursor-pointer"
          >
            <h3 className="text-white text-md font-bold">Connect Wallet</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
