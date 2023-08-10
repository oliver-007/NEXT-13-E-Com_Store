interface ContainterProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainterProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
