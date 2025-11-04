import { FunctionComponent } from "react";

interface GenericContainerProps {
  children: React.ReactNode;
  width?: string;
}

const GenericContainer: FunctionComponent<GenericContainerProps> = ({
  children,
}) => {
  return <div className={`mx-auto my-0 w-full`}>{children}</div>;
};

export default GenericContainer;
