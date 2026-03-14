import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const themes = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="relative">
      <div className="flex items-center p-1 bg-muted/50 rounded-full border border-border/50 backdrop-blur-sm">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = theme === themeOption.value;
          
          return (
            <button
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value as any)}
              className={`
                relative p-2 rounded-full transition-all duration-300 hover:scale-110
                ${isActive 
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                }
              `}
              aria-label={`Switch to ${themeOption.label} theme`}
              title={`${themeOption.label} theme`}
            >
              <Icon size={16} />
              
              {/* Active indicator glow */}
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm -z-10" />
              )}
            </button>
          );
        })}
      </div>

      {/* Theme indicator tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {actualTheme === "dark" ? "🌙" : "☀️"}
      </div>
    </div>
  );
};

export default ThemeToggle;