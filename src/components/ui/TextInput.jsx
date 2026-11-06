export default function TextInput({ className = '', ...rest }) {
  return <input className={`input ${className}`} {...rest} />;
}
