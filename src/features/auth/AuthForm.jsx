import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, FormField, TextInput, PasswordInput } from '../../components/ui';
import { useAuth } from '../../context/AuthContext.jsx';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const COPY = {
  login: {
    title: 'Welcome back',
    subtitle: 'Log in to manage your orders and shipments.',
    submit: 'Log In',
    busy: 'Logging in…',
    altText: "Don't have an account?",
    altLabel: 'Sign up',
    altTo: '/signup',
  },
  signup: {
    title: 'Create your account',
    subtitle: 'Start shipping in a few minutes. It’s free to sign up.',
    submit: 'Create Account',
    busy: 'Creating account…',
    altText: 'Already have an account?',
    altLabel: 'Log in',
    altTo: '/login',
  },
};

function validate(mode, values) {
  const errors = {};
  if (mode === 'signup' && !values.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL.test(values.email)) errors.email = 'Enter a valid email address.';
  if (values.password.length < 6) errors.password = 'Password must be at least 6 characters.';
  return errors;
}

export default function AuthForm({ mode = 'login' }) {
  const copy = COPY[mode];
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || '/dashboard';

  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const setField = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((errs) => ({ ...errs, [key]: undefined }));
    setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(mode, values);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setLoading(true);
    try {
      await (mode === 'signup' ? signup(values) : login(values));
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setSubmitError(err?.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <h1 className="auth-form__title">{copy.title}</h1>
      <p className="auth-form__subtitle">{copy.subtitle}</p>

      {submitError && (
        <div className="auth-form__alert" role="alert">
          {submitError}
        </div>
      )}

      {mode === 'signup' && (
        <FormField label="Full name" htmlFor="name" error={errors.name}>
          <TextInput
            id="name"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={setField('name')}
            aria-invalid={Boolean(errors.name)}
          />
        </FormField>
      )}

      <FormField label="Email" htmlFor="email" error={errors.email}>
        <TextInput
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={values.email}
          onChange={setField('email')}
          aria-invalid={Boolean(errors.email)}
        />
      </FormField>

      <FormField label="Password" htmlFor="password" error={errors.password}>
        <PasswordInput
          id="password"
          autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
          placeholder="At least 6 characters"
          value={values.password}
          onChange={setField('password')}
          aria-invalid={Boolean(errors.password)}
        />
      </FormField>

      <Button type="submit" block disabled={loading} className="auth-form__submit">
        {loading ? copy.busy : copy.submit}
      </Button>

      <p className="auth-form__alt">
        {copy.altText} <Link to={copy.altTo}>{copy.altLabel}</Link>
      </p>
    </form>
  );
}
