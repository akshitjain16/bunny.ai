
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, Layers, Settings, ChevronLeft, ChevronRight, 
  BookOpen, History, Palette, Grid, Sparkles, LayoutGrid,
  Monitor, Smartphone, Tablet
} from "lucide-react";

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`h-full bg-card border-r border-border/50 transition-all duration-300 ${
      collapsed ? "w-16" : "w-64"
    }`}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-aivora-500 mr-2" />
              <h2 className="font-bold text-lg">Bunny.AI</h2>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        <nav className="space-y-1">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-secondary text-foreground"
          >
            <Home className="h-5 w-5" />
            {!collapsed && <span>Dashboard</span>}
          </Link>
          
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Layers className="h-5 w-5" />
            {!collapsed && <span>My Components</span>}
          </Link>
          
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Palette className="h-5 w-5" />
            {!collapsed && <span>Templates</span>}
          </Link>
          
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Grid className="h-5 w-5" />
            {!collapsed && <span>UI Library</span>}
          </Link>
          
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <History className="h-5 w-5" />
            {!collapsed && <span>History</span>}
          </Link>
        </nav>

        {!collapsed && (
          <div className="mt-8 px-3 py-4 rounded-lg bg-secondary/30">
            <h3 className="font-medium text-sm mb-3">Responsive Preview</h3>
            <div className="flex items-center justify-between text-muted-foreground">
              <button className="p-2 rounded hover:bg-secondary/50 hover:text-foreground transition-colors">
                <Smartphone className="h-5 w-5" />
              </button>
              <button className="p-2 rounded hover:bg-secondary/50 hover:text-foreground transition-colors">
                <Tablet className="h-5 w-5" />
              </button>
              <button className="p-2 rounded hover:bg-secondary/50 hover:text-foreground transition-colors">
                <Monitor className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        <div className="mt-auto">
          {!collapsed && (
            <div className="mb-4 p-4 rounded-lg bg-secondary/30">
              <div className="flex items-center mb-2">
                <LayoutGrid className="h-4 w-4 text-aivora-500 mr-2" />
                <span className="text-sm font-medium">Unlimited Access</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Generate unlimited UI components with Bunny.AI
              </p>
            </div>
          )}
          
          <Link
            to="/settings"
            className={`mt-2 flex items-center gap-2 px-3 py-2 rounded-md hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <Settings className="h-5 w-5" />
            {!collapsed && <span>Settings</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
