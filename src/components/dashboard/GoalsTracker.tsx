import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle, Laptop, Plane, GraduationCap, Home } from "lucide-react";

const GoalsTracker = () => {
  const goals = [
    {
      name: "New Laptop",
      target: 1200,
      current: 820,
      deadline: "Dec 2024",
      icon: Laptop,
      priority: "High"
    },
    {
      name: "Spring Break Trip",
      target: 800,
      current: 245,
      deadline: "Mar 2025",
      icon: Plane,
      priority: "Medium"
    },
    {
      name: "Emergency Fund",
      target: 2000,
      current: 1350,
      deadline: "Jun 2025",
      icon: Home,
      priority: "High"
    },
    {
      name: "Graduation Fund",
      target: 1500,
      current: 450,
      deadline: "May 2026",
      icon: GraduationCap,
      priority: "Low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-destructive";
      case "Medium": return "text-warning";
      case "Low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground">Savings Goals</CardTitle>
        <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Goal
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100;
          
          return (
            <div key={index} className="space-y-3 p-4 rounded-lg bg-accent/30 border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <goal.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{goal.name}</h4>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>Due: {goal.deadline}</span>
                      <span>•</span>
                      <span className={getPriorityColor(goal.priority)}>
                        {goal.priority} Priority
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">
                    ${goal.current} / ${goal.target}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ${goal.target - goal.current} remaining
                  </div>
                </div>
              </div>
              
              <Progress value={percentage} className="h-3" />
              
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">{percentage.toFixed(1)}% complete</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="h-6 px-2 text-xs bg-gradient-success text-success-foreground border-success hover:opacity-90">
                    Add Funds
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default GoalsTracker;