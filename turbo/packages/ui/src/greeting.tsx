export const Greeting = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <h1>Greeting Component</h1>
      {children}
    </div>
  );
};
