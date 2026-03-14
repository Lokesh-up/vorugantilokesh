const VercelIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);

export default VercelIcon;
