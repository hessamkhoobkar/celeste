import Logo from "./header/logo";
import Navigation from "./header/navigation";
import ProfileMenu from "./header/profile-menu";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between rounded-2xl bg-card px-4 text-card-foreground shadow">
      <Logo />
      <Navigation />
      <div className="flex items-end gap-2">
        <ThemeToggle />
        <ProfileMenu />
      </div>
    </header>
  );
}
