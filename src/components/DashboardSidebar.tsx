
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Layers, Settings, Crown, ChevronLeft, ChevronRight, BookOpen, History, Palette } from "lucide-react";

interface DashboardSidebarProps {
  usage: number;
  limit: number;
}

const DashboardSidebar = ({ usage, limit }: DashboardSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const progressPercentage = (usage / limit) * 100;

  return (
    <div className={`h-full bg-card border-r border-border/50 transition-all duration-300 ${
      collapsed ? "w-16" : "w-64"
    }`}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <h2 className="font-semibold text-lg">Bonny.AI</h2>
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
            <History className="h-5 w-5" />
            {!collapsed && <span>History</span>}
          </Link>
          
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            {!collapsed && <span>Documentation</span>}
          </Link>
        </nav>

        <div className="mt-auto">
          {!collapsed && (
            <div className="mb-4 p-3 rounded-lg bg-secondary/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Daily Usage</span>
                <span className="text-xs text-muted-foreground">{usage}/{limit}</span>
              </div>
              <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-aivora-500" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          )}

          <Link
            to="/pricing"
            className={`flex items-center gap-2 p-2 rounded-lg bg-aivora-500 hover:bg-aivora-600 text-white transition-colors w-full justify-center ${
              collapsed ? "flex-col py-3" : ""
            }`}
          >
            <Crown className="h-4 w-4" />
            {!collapsed && <span>Upgrade to Pro</span>}
          </Link>
          
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
