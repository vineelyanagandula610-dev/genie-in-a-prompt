import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ShoppingCart, Car, Home, BookOpen, Coffee, Gamepad2 } from "lucide-react";

const ExpenseCategories = () => {
  const categories = [
    { name: "Food & Dining", amount: 456, budget: 600, icon: Coffee, color: "hsl(var(--primary))" },
    { name: "Transportation", amount: 234, budget: 300, icon: Car, color: "hsl(var(--success))" },
    { name: "Shopping", amount: 189, budget: 250, icon: ShoppingCart, color: "hsl(var(--warning))" },
    { name: "Education", amount: 345, budget: 400, icon: BookOpen, color: "hsl(var(--accent-foreground))" },
    { name: "Housing", amount: 800, budget: 800, icon: Home, color: "hsl(var(--destructive))" },
    { name: "Entertainment", amount: 123, budget: 200, icon: Gamepad2, color: "hsl(var(--primary-glow))" },
  ];

  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center space-x-2">
          <span>Expense Categories</span>
          <div className="bg-gradient-success px-2 py-1 rounded-full">
            <span className="text-xs text-success-foreground font-medium">Auto-Categorized</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, index) => {
          const percentage = (category.amount / category.budget) * 100;
          const isOverBudget = percentage > 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${category.color}20` }}>
                    <category.icon className="h-4 w-4" style={{ color: category.color }} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{category.name}</span>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-semibold ${isOverBudget ? 'text-destructive' : 'text-foreground'}`}>
                    ${category.amount}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">/ ${category.budget}</span>
                </div>
              </div>
              <Progress 
                value={Math.min(percentage, 100)} 
                className="h-2"
                style={{ 
                  '--progress-foreground': isOverBudget ? 'hsl(var(--destructive))' : category.color 
                } as any}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{percentage.toFixed(1)}% of budget</span>
                {isOverBudget && (
                  <span className="text-destructive font-medium">Over budget!</span>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ExpenseCategories;