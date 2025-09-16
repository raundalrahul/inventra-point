import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  AlertTriangle,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SalesChart from "@/components/charts/SalesChart";
import CategoryChart from "@/components/charts/CategoryChart";

// Mock data
const mockProducts = [
  {
    id: "PRD001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    stock: 45,
    status: "In Stock",
    sales: 156
  },
  {
    id: "PRD002", 
    name: "Coffee Beans - Premium",
    category: "Food & Beverage",
    price: 24.99,
    stock: 8,
    status: "Low Stock",
    sales: 89
  },
  {
    id: "PRD003",
    name: "Yoga Mat",
    category: "Sports & Fitness",
    price: 34.99,
    stock: 23,
    status: "In Stock", 
    sales: 67
  },
  {
    id: "PRD004",
    name: "Desk Organizer",
    category: "Office Supplies",
    price: 19.99,
    stock: 0,
    status: "Out of Stock",
    sales: 234
  },
  {
    id: "PRD005",
    name: "Water Bottle - Steel",
    category: "Home & Garden",
    price: 29.99,
    stock: 67,
    status: "In Stock",
    sales: 123
  }
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return <Badge className="status-success">In Stock</Badge>;
      case "Low Stock":
        return <Badge className="status-warning">Low Stock</Badge>;
      case "Out of Stock":
        return <Badge className="status-error">Out of Stock</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const metrics = [
    {
      title: "Total Revenue",
      value: "$12,345",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Total Products",
      value: "1,234",
      change: "+8 today",
      icon: Package,
      color: "text-primary"
    },
    {
      title: "Low Stock Items",
      value: "23",
      change: "Needs attention",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      title: "Today's Sales",
      value: "156",
      change: "+18.2%",
      icon: ShoppingCart,
      color: "text-info"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome back! Here's your store overview.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="metric-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="text-2xl font-bold text-foreground">
                  {metric.value}
                </div>
                <p className={`text-sm mt-1 ${metric.color}`}>
                  {metric.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Sales Trend</CardTitle>
              <CardDescription>
                Daily sales performance over the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Category Performance</CardTitle>
              <CardDescription>
                Revenue distribution by product categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CategoryChart />
            </CardContent>
          </Card>
        </div>

        {/* Recent Products */}
        <Card className="shadow-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">Product Inventory</CardTitle>
              <CardDescription>
                Manage your product catalog and stock levels
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-muted-foreground">Product</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Category</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Price</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Stock</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Status</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">Sales</th>
                    <th className="text-right p-4 font-semibold text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div>
                          <div className="font-medium text-foreground">{product.name}</div>
                          <div className="text-sm text-muted-foreground font-mono">{product.id}</div>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{product.category}</td>
                      <td className="p-4 font-semibold text-foreground">${product.price}</td>
                      <td className="p-4 font-mono text-foreground">{product.stock}</td>
                      <td className="p-4">{getStatusBadge(product.status)}</td>
                      <td className="p-4 font-semibold text-foreground">{product.sales}</td>
                      <td className="p-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit Product
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-error">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete Product
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;