import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

// Wrapper to inject navigate into class component
export default function MoreModalWrapper(props) {
  const navigate = useNavigate();
  return <MoreModal {...props} navigate={navigate} />;
}

class MoreModal extends Component {
  render() {
    const { onClose, navigate } = this.props;

    const options = [
      { id: 1, name: "Profile", path: "/profile" },
      { id: 2, name: "Wallet", path: "/wallet" },
      { id: 3, name: "Settings", path: "/settings" },
      { id: 4, name: "About", path: "/about" },
      { id: 5, name: "Help", path: "/help" },
    ];

    const handleNavigation = (path) => {
      navigate(path);
      onClose(); // Close modal after navigation
    };

    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-end z-50">
        {/* Click outside to close */}
        <div className="flex-1" onClick={onClose}></div>

        {/* Modal panel */}
        <div className="w-64 bg-black/90 text-white p-4 space-y-4">
          <h2 className="text-xl font-bold mb-4">More</h2>
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleNavigation(opt.path)}
              className="w-full text-left px-4 py-2 rounded hover:bg-orange-500 hover:text-black transition-colors"
            >
              {opt.name}
            </button>
          ))}

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-full mt-4 px-4 py-2 bg-red-600 rounded font-semibold hover:bg-red-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
