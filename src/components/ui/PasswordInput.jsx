import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import TextInput from './TextInput.jsx';

export default function PasswordInput(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="password">
      <TextInput {...props} type={visible ? 'text' : 'password'} />
      <button
        type="button"
        className="password__toggle"
        aria-label={visible ? 'Hide password' : 'Show password'}
        onClick={() => setVisible((v) => !v)}
      >
        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
}
