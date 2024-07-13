export const Inputbox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <input type="text" />
      {children}
    </div>
  );
};
