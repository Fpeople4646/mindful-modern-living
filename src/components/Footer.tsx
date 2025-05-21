
```tsx
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 py-8 text-center text-foreground/70 border-t border-border">
      <div className="content-container">
        <p>&copy; {currentYear} Disiplin Baja. Semua hak dilindungi.</p>
        <p className="text-sm mt-1">
          Dibangun dengan <span className="text-secondary">🔥</span> oleh Lovable. {/* Changed heart to fire */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
```
