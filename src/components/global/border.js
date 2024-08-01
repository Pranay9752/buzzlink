const NeoBorder = ({
  children,
  offset_x = 2,
  offset_y = "2",
  blur = "0",
  color = "rgba(0, 0, 0, 1)",
  isBorder = true,
  className,
  handleClick = () => {},
}) => {
  return (
    <div
      onClick={handleClick}
      style={{
        boxShadow: isBorder
          ? `${offset_x}px ${offset_y}px ${blur}px ${color}`
          : null,
      }}
      className={`border-2 border-black ${className}`}
    >
      {children}
    </div>
  );
};

export default NeoBorder;
