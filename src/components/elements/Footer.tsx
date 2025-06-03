import { Container } from "../shared/Container";
import logo from "../../assets/logo1.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-4 rounded-t-3xl bg-box-bg">
      <Container className="pb-4 md:mb-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} alt="logo" className="w-14 h-14" />
            <div className="inline-flex text-lg font-semibold text-heading-1">
              <p>
                Tax Methods <br /> Company
              </p>
            </div>
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
