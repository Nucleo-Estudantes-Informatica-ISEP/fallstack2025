import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* Left image - anchored to left/top/bottom, keeps specified aspect ratio on desktop */}
      {/* Hidden on small screens so mobile layout doesn't show the left logo */}
      <div className="auth-left relative hidden md:block">
        <Image
          src={"/assets/images/auth-logo.jpg"}
          alt="Auth Header"
          fill
          className="object-contain"
          style={{ objectPosition: "left center" }}
          priority
        />
      </div>

      {/* Right pane - fills remaining space and holds auth content */}
      <div className="auth-pane relative z-10 flex w-full items-center justify-center px-6 md:px-12">
        <div className="flex h-[50vh] w-full flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
