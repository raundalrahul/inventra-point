import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShoppingCart, DollarSign, TrendingUp, Users, Plus } from "lucide-react";

const salesData = [
  {
    id: "TXN001",
    customer: "John Smith",
    items: 3,
    total: 156.47,
    payment: "Credit Card",
    status: "Completed",
    date: "2025-01-15 14:23"
  },
  {
    id: "TXN002",
    customer: "Sarah Johnson",
    items: 1,
    total: 79.99,
    payment: "Cash",
    status: "Completed",
    date: "2025-01-15 13:45"
  },
  {
    id: "TXN003",
    customer: "Mike Davis",
    items: 5,
    total: 289.75,
    payment: "UPI",
    status: "Completed",
    date: "2025-01-15 12:30"
  },
  {
    id: "TXN004",
    customer: "Emma Wilson",
    items: 2,
    total: 45.50,
    payment: "Credit Card",
    status: "Pending",
    date: "2025-01-15 11:15"
  },
  {
    id: "TXN005",
    customer: "David Brown",
    items: 4,
    total: 198.25,
    payment: "Cash",
    status: "Completed",
    date: "2025-01-15 10:00"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-success text-success-foreground";
    case "Pending":
      return "bg-warning text-warning-foreground";
    case "Failed":
      return "bg-error text-error-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Sales = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sales Management</h1>
            <p className="text-muted-foreground">Track and manage your sales transactions</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Sale
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Sales</CardTitle>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,847</div>
              <p className="text-xs text-muted-foreground">+15% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              <ShoppingCart className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">147</div>
              <p className="text-xs text-muted-foreground">+8% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Order</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$19.37</div>
              <p className="text-xs text-muted-foreground">+2.5% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">Unique customers today</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest sales transactions and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesData.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.customer}</TableCell>
                      <TableCell>{transaction.items}</TableCell>
                      <TableCell>${transaction.total}</TableCell>
                      <TableCell>{transaction.payment}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Receipt</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cash Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,245</div>
              <p className="text-sm text-muted-foreground">43.7% of total sales</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Card Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,189</div>
              <p className="text-sm text-muted-foreground">41.8% of total sales</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Digital Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$413</div>
              <p className="text-sm text-muted-foreground">14.5% of total sales</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Sales;