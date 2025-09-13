import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      description: "Starbucks Coffee",
      category: "Food & Dining",
      amount: -4.85,
      date: "Today, 2:30 PM",
      type: "expense",
      merchant: "Starbucks #2847"
    },
    {
      id: 2,
      description: "Part-time Job",
      category: "Income",
      amount: 325.00,
      date: "Yesterday, 5:00 PM",
      type: "income",
      merchant: "Campus Bookstore"
    },
    {
      id: 3,
      description: "Uber Ride",
      category: "Transportation",
      amount: -12.50,
      date: "Yesterday, 8:15 PM",
      type: "expense",
      merchant: "Uber Technologies"
    },
    {
      id: 4,
      description: "Amazon Purchase",
      category: "Shopping",
      amount: -29.99,
      date: "2 days ago",
      type: "expense",
      merchant: "Amazon.com"
    },
    {
      id: 5,
      description: "Textbook Refund",
      category: "Education",
      amount: 85.50,
      date: "3 days ago",
      type: "income",
      merchant: "University Bookstore"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Food & Dining": "bg-primary/10 text-primary",
      "Transportation": "bg-success/10 text-success",
      "Shopping": "bg-warning/10 text-warning",
      "Education": "bg-accent-foreground/10 text-accent-foreground",
      "Income": "bg-success/10 text-success"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground">Recent Transactions</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${transaction.type === 'income' ? 'bg-success/20' : 'bg-primary/20'}`}>
                {transaction.type === 'income' ? (
                  <ArrowDownLeft className="h-4 w-4 text-success" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-foreground">
                    {transaction.description}
                  </span>
                  <Badge variant="secondary" className={`text-xs ${getCategoryColor(transaction.category)}`}>
                    {transaction.category}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  {transaction.merchant} • {transaction.date}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className={`text-sm font-semibold ${transaction.type === 'income' ? 'text-success' : 'text-foreground'}`}>
                {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </span>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border">
          <Button variant="outline" className="w-full">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;