
```typescript
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 py-8 text-center text-foreground/70 border-t border-border">
      <div className="content-container">
        <p>&copy; {currentYear} Ritme Harian. Semua hak dilindungi.</p> {/* Changed App Name */}
        <p className="text-sm mt-1">
          Dibangun dengan <span className="text-secondary">🔥</span> oleh Lovable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
```
