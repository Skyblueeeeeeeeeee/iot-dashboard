import Navbar from "@/components/navbar";

const SetupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-4 px-2 my-6">{children}</div>
    </>
  );
};

export default SetupLayout;
