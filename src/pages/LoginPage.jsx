import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Input from "../components/Input.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
          Login
        </h2>

        <form>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mt-4 relative">
            <Input
              icon={Lock}
              type={visible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {visible ? (
              <AiOutlineEye
                className="absolute right-2 top-2 cursor-pointer text-gray-600"
                size={24}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-2 cursor-pointer text-gray-600"
                size={24}
                onClick={() => setVisible(true)}
              />
            )}
          </div>

          <div className="mt-4 flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-6 w-full cursor-pointer bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black font-semibold hover:underline">
            Sign up
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default LoginPage;
