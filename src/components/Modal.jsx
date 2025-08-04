// export default function Modal({ isOpen, onClose }) {
//     if (!isOpen) return null;
  
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//         <div className="bg-white rounded-lg w-[460px] h-[250px] shadow-md flex flex-col items-center justify-center text-sm px-5 py-4">
//           <p className="font-medium text-center mb-4">View report in Dashboard</p>
//           <button
//             onClick={onClose}
//             className="text-[13px] text-blue-600 hover:underline"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   }
  

// Dashboard with link
import { useNavigate } from 'react-router-dom';

export default function Modal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-[460px] h-[250px] shadow-md flex flex-col items-center justify-center text-sm px-5 py-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="font-medium text-center mb-4 text-blue-600 hover:underline"
        >
          View report in Dashboard
        </button>
        <button
          onClick={onClose}
          className="text-[13px] text-blue-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
