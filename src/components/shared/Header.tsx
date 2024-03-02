import { ModeToggle } from "../ModeToggle";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="w-full h-16 border-b-2 border-b-neutral-300 dark:border-b-neutral-800 p-4 flex justify-between items-center">
      <div className="">Logo</div>
      <div className="flex items-center gap-4">
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
