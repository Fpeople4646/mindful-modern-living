
```tsx
// import { useTheme } from "next-themes" // Removed next-themes
import * as SonnerPackage from "sonner" // Changed to namespace import

type ToasterProps = React.ComponentProps<typeof SonnerPackage.Toaster>

const Toaster = ({ ...props }: ToasterProps) => {
  // const { theme = "system" } = useTheme() // Removed useTheme

  return (
    <SonnerPackage.Toaster // Use Toaster from the namespace
      theme={"dark" as ToasterProps["theme"]} // Set theme to "dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

// Make the toast function from the sonner package available for export
const toast = SonnerPackage.toast;

export { Toaster, toast }
```
