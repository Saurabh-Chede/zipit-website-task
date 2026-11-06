import AuthLayout from '../features/auth/AuthLayout.jsx';
import AuthForm from '../features/auth/AuthForm.jsx';

export default function Login() {
  return (
    <AuthLayout>
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
