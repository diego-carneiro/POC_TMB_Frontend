import { useNavigate } from "react-router-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => navigate("/orders-pannel")}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
