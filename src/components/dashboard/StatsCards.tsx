import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Target, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const StatsCards = () => {
  const stats = [
    {
      title: "Current Balance",
      value: "$2,847.50",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      gradient: "gradient-primary"
    },
    {
      title: "Monthly Spending",
      value: "$1,234.80",
      change: "-8.2%",
      trend: "down",
      icon: TrendingDown,
      gradient: "gradient-success"
    },
    {
      title: "Savings Goal",
      value: "68%",
      change: "+5.1%",
      trend: "up",
      icon: Target,
      gradient: "gradient-primary"
    },
    {
      title: "Budget Alerts",
      value: "3",
      change: "2 new",
      trend: "alert",
      icon: AlertTriangle,
      gradient: "gradient-success"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`bg-${stat.gradient} p-2 rounded-lg`}>
              <stat.icon className="h-4 w-4 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
            <div className="flex items-center space-x-2">
              {stat.trend === "up" && (
                <Badge variant="outline" className="text-success border-success bg-success/10">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </Badge>
              )}
              {stat.trend === "down" && (
                <Badge variant="outline" className="text-success border-success bg-success/10">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  {stat.change}
                </Badge>
              )}
              {stat.trend === "alert" && (
                <Badge variant="outline" className="text-warning border-warning bg-warning/10">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  {stat.change}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;