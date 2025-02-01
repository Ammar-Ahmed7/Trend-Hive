/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserCircle } from 'lucide-react';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    if (role === 'customer') {
      navigate('/Clogin');
    } else if (role === 'admin') {
      navigate('/Alogin');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Select Role</h1>
          <p className="text-gray-500 mt-1">Choose your role to continue</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleRoleSelect('customer')}
            className={`p-4 rounded-lg transition-all duration-200 h-20 flex flex-col items-center justify-center gap-2
              ${selectedRole === 'customer' 
                ? 'bg-blue-500 text-white border-2 border-blue-600' 
                : 'border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-500'
              }`}
          >
            <User className="h-6 w-6" />
            <span>Customer</span>
          </button>

          <button
            onClick={() => handleRoleSelect('admin')}
            className={`p-4 rounded-lg transition-all duration-200 h-20 flex flex-col items-center justify-center gap-2
              ${selectedRole === 'admin' 
                ? 'bg-blue-500 text-white border-2 border-blue-600' 
                : 'border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-500'
              }`}
          >
            <UserCircle className="h-6 w-6" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;