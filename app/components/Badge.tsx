interface BadgeProps {
  children: React.ReactNode;
  animation?: "slow" | "medium" | "fast" | "slow-delayed";
  className?: string;
}

export default function Badge({
  children,
  animation = "slow",
  className = "",
}: BadgeProps) {
  const getAnimationClass = () => {
    switch (animation) {
      case "slow":
        return "animate-float-slow";
      case "medium":
        return "animate-float-medium";
      case "fast":
        return "animate-float-fast";
      case "slow-delayed":
        return "animate-float-slow-delayed";
      default:
        return "animate-float-slow";
    }
  };

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-sm font-medium bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 cursor-pointer ${getAnimationClass()} hover:scale-105 hover:shadow-md transition-all duration-300 ${className}`}
    >
      {children}
    </span>
  );
}
