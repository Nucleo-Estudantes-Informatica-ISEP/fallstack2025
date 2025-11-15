import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* Left image - hidden on phones (we show a centered logo on mobile auth pages) */}
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
        <div className="flex h-[60vh] w-full flex-col justify-center gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
