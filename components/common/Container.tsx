interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full flex flex-col min-h-screen bg-[#1A062A]"></div>;
};

export default Container;
