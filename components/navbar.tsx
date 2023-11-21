import Link from "next/link";
import MainNav from "./main-nav";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-6">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <Link href={"/logout"}>
            <Button>Logout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
