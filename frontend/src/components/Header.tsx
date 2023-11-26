export type HeaderProps = {
  title: string | React.ReactElement;
  subtitle?: string | React.ReactElement;
  className?: string;
};

const Header = ({ title, subtitle, className }: HeaderProps) => {
  return (
    <header className={`${className} mb-4 text-center`}>
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <h5 className="text-lg">{subtitle}</h5>}
    </header>
  );
};

export default Header;
