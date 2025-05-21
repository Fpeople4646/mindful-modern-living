
```tsx
// import { useTheme } from "next-themes" // Removed next-themes
import { Toaster as SonnerPrimitive, toast } from "sonner" // Renamed to avoid conflict

type ToasterProps = React.ComponentProps<typeof SonnerPrimitive>

const Toaster = ({ ...props }: ToasterProps) => {
  // const { theme = "system" } = useTheme() // Removed useTheme

  return (
    <SonnerPrimitive
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

export { Toaster, toast }
```
