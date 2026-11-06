export default function ToolbarButton({ icon: Icon, iconOnly = false, children, className = '', ...rest }) {
  return (
    <button
      className={`inline-flex h-[38px] items-center justify-center gap-2 rounded-md border border-line bg-white text-[13px] text-ink transition-colors hover:border-brand hover:text-brand ${
        iconOnly ? 'w-[38px]' : 'px-5'
      } ${className}`}
      {...rest}
    >
      {Icon && <Icon size={iconOnly ? 18 : 16} />}
      {children}
    </button>
  );
}
