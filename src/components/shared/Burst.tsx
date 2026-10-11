type BurstProps = {
  size?: number;
  className?: string;
};

/** Símbolo da marca (DS 6.2). Nunca textura nem decoração de botão. */
export default function Burst({ size = 32, className }: BurstProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12.00 1.00 L13.86 5.05 L17.50 2.47 L17.09 6.91 L21.53 6.50 L18.95 10.14 L23.00 12.00 L18.95 13.86 L21.53 17.50 L17.09 17.09 L17.50 21.53 L13.86 18.95 L12.00 23.00 L10.14 18.95 L6.50 21.53 L6.91 17.09 L2.47 17.50 L5.05 13.86 L1.00 12.00 L5.05 10.14 L2.47 6.50 L6.91 6.91 L6.50 2.47 L10.14 5.05Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
