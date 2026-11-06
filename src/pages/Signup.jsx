import AuthLayout from '../features/auth/AuthLayout.jsx';
import AuthForm from '../features/auth/AuthForm.jsx';

export default function Signup() {
  return (
    <AuthLayout>
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
