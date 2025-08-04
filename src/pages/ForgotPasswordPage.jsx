import { motion } from "framer-motion";
import { useState } from "react";
import Input from "../components/Input";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen  text-gray-600 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-600">
            Forgot Password
          </h2>

          {!isSubmitted ? (
            <form>
              <p className="text-gray-400 mb-6 text-center">
                Enter your email address and we’ll send you a link to reset your password.
              </p>
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* Replace this with a real button when backend is ready */}
              <button
                type="submit"
                className="mt-6 w-full py-3 bg-white text-gray-600 font-semibold rounded-md hover:bg-gray-200 transition"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Mail className="h-8 w-8 text-gray-600" />
              </motion.div>
              <p className="text-gray-400 mb-6">
                If an account exists for <strong>{email}</strong>, you will receive a password reset link shortly.
              </p>
            </div>
          )}
        </div>

        <div className="px-8 py-4 bg-white flex justify-center">
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:underline flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;
