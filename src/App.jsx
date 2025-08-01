// import FloatingShape from "./components/FloatingShape";
import { Navigate, Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
// import EmailVerificationPage from "./pages/EmailVerificationPage";

// import FoodPage from "./pages/FoodPage";
// import TopCategoriesPage from "./pages/TopCategoriesPage";
// import EventsPage from "./pages/EventsPage";
// import FaqPage from "./pages/FaqPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import PaymentPage from "./pages/PaymentPage";
// import OrderSuccessPage from "./pages/OrderSuccessPage";
// import ProfilePage from "./pages/ProfilePage";
// import FoodDetailsPage from "./pages/FoodDetailsPage";
// import ResetPasswordPage from "./pages/ResetPasswordPage";


// import { SellersDashboardPage } from "./routes/SellersRoutes";
// import { Toaster } from "react-hot-toast";
// import { useAuthStore } from "./store/authStore";
// import { useShopAuthStore } from "./store/shopAuthStore";
// import { useEffect } from "react";

import LoadingSpinner from "./components/LoadingSpinner.jsx";

// import SellersResetPasswordPage from "./pages/SellersResetPasswordPage";
// import SellersForgotPasswordPage from "./pages/SellersForgotPasswordPage";
// import SellersEmailVerificationPage from "./pages/SellersEmailVerificationPage";
// import SellersHomePage from "./pages/SellersHomePage";
// import SellersSignUpPage from "./pages/SellersSignupPage";
// import SellersLoginPage from "./pages/SellersLoginPage";
// import SellerProtectedRoute from "./routes/SellerProtectedRoute";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import RedirectAuthenticatedUser from "./redirectedRoutes/RedirectAuthenticatedUser";
// import RedirectAuthenticatedSeller from "./redirectedRoutes/RedirectAuthenticatedSeller";

function App() {

  // const { isCheckingAuth, checkAuth } = useAuthStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // const { sellerIsCheckingAuth, shopCheckAuth } = useShopAuthStore();

  // useEffect(() => {
  //   shopCheckAuth();
  // }, [shopCheckAuth]);

  // // Combine loading states
  // const isLoading = isCheckingAuth || sellerIsCheckingAuth;

  // if (isLoading) return <LoadingSpinner />;
  return (
    <>
    
          {/* <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-lime-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      /> */}

          <Routes>
            {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        /> */}

            <Route path="/" element={<HomePage />} />
            <Route
              path="/signup"
              element={
                // <RedirectAuthenticatedUser>
                <SignUpPage />
                // </RedirectAuthenticatedUser>
              }
            />
            <Route
              path="/login"
              element={
                // <RedirectAuthenticatedUser>
                <LoginPage />
                // </RedirectAuthenticatedUser>
              }
            />
            {/* <Route
              path="/verify-email"
              element={
                <RedirectAuthenticatedUser>
                  <EmailVerificationPage />
                </RedirectAuthenticatedUser>
              }
            /> */}
            {/* <Route path="/verify-email" element={<EmailVerificationPage />} /> */}
            <Route
              path="/forgot-password"
              element={
                
                  <ForgotPasswordPage />
             
              }
            />
            {/* <Route
              path="/reset-password/:token"
              element={
                <RedirectAuthenticatedUser>
                  <ResetPasswordPage />
                </RedirectAuthenticatedUser>
              }
            /> */}

            {/* <Route path="/foods" element={<FoodPage />} />
            <Route path="/food/:name" element={<FoodDetailsPage />} />
            <Route path="/top-categories" element={<TopCategoriesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order/success/:id" element={<OrderSuccessPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            /> */}

        
       
            {/* catch all routes
        <Route path="*" element={<Navigate to="/shop" replace />} /> */}
          </Routes>
          {/* <Toaster /> */}
     
      
    </>
  );
}

export default App;
