import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const SpendingChart = () => {
  const data = [
    { month: "Jan", spending: 1200, predicted: 1250 },
    { month: "Feb", spending: 1100, predicted: 1150 },
    { month: "Mar", spending: 1300, predicted: 1280 },
    { month: "Apr", spending: 1050, predicted: 1100 },
    { month: "May", spending: 1235, predicted: 1200 },
    { month: "Jun", spending: 980, predicted: 1000 },
  ];

  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center space-x-2">
          <span>Spending Analysis</span>
          <div className="bg-gradient-primary px-2 py-1 rounded-full">
            <span className="text-xs text-primary-foreground font-medium">AI Powered</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="spending" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Actual Spending</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-sm text-muted-foreground">AI Prediction</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;