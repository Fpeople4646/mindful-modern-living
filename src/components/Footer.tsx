
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 py-8 text-center text-foreground/70">
      <div className="content-container">
        <p>&copy; {currentYear} Sehat Disiplin. Semua hak dilindungi.</p>
        <p className="text-sm mt-1">
          Dibangun dengan <span className="text-red-500">❤️</span> oleh Lovable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
