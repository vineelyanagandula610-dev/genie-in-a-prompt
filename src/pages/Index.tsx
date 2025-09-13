import Navbar from "@/components/layout/Navbar";
import StatsCards from "@/components/dashboard/StatsCards";
import SpendingChart from "@/components/dashboard/SpendingChart";
import ExpenseCategories from "@/components/dashboard/ExpenseCategories";
import GoalsTracker from "@/components/dashboard/GoalsTracker";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import BudgetAlerts from "@/components/dashboard/BudgetAlerts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Financial Dashboard</h1>
            <p className="text-muted-foreground">
              AI-powered insights to help you manage your student finances smarter
            </p>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <SpendingChart />
              <GoalsTracker />
            </div>
            
            <div className="space-y-8">
              <ExpenseCategories />
              <BudgetAlerts />
            </div>
          </div>

          {/* Recent Transactions */}
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
};

export default Index;
