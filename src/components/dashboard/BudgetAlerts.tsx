import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, Target, X } from "lucide-react";

const BudgetAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "warning",
      title: "Food Budget Almost Exceeded",
      description: "You've spent $456 of your $600 food budget this month",
      percentage: 76,
      action: "Review Spending",
      icon: AlertTriangle
    },
    {
      id: 2,
      type: "danger",
      title: "Housing Budget Exceeded",
      description: "You've reached 100% of your housing budget",
      percentage: 100,
      action: "Adjust Budget",
      icon: TrendingUp
    },
    {
      id: 3,
      type: "info",
      title: "Savings Goal Update",
      description: "You're $30 ahead of schedule for your laptop fund",
      percentage: 68,
      action: "View Goal",
      icon: Target
    }
  ];

  const getAlertStyles = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-warning/10 border-warning text-warning-foreground";
      case "danger":
        return "bg-destructive/10 border-destructive text-destructive-foreground";
      case "info":
        return "bg-primary/10 border-primary text-primary-foreground";
      default:
        return "bg-muted border-border text-muted-foreground";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return "text-warning";
      case "danger":
        return "text-destructive";
      case "info":
        return "text-primary";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground flex items-center space-x-2">
          <span>Smart Alerts</span>
          <Badge className="bg-gradient-primary text-primary-foreground">
            AI Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`p-4 rounded-lg border ${getAlertStyles(alert.type)} transition-all duration-200 hover:shadow-sm`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className={`p-1.5 rounded-lg bg-background/50`}>
                  <alert.icon className={`h-4 w-4 ${getAlertIcon(alert.type)}`} />
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-semibold">{alert.title}</h4>
                  <p className="text-xs opacity-90">{alert.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-6 px-2 text-xs bg-background/50 hover:bg-background/70"
                    >
                      {alert.action}
                    </Button>
                    {alert.percentage && (
                      <Badge variant="secondary" className="text-xs">
                        {alert.percentage}%
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="pt-2">
          <Button variant="outline" className="w-full text-sm">
            View All Alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetAlerts;