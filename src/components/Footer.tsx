import { personalInfo } from "../data";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
