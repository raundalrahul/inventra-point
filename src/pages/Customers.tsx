import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, Plus, Search, Filter, Star, ShoppingBag, DollarSign } from "lucide-react";

const customersData = [
  {
    id: "CUST001",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    totalOrders: 15,
    totalSpent: 1247.50,
    lastVisit: "2025-01-15",
    status: "Active",
    loyalty: "Gold"
  },
  {
    id: "CUST002",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 234-5678",
    totalOrders: 8,
    totalSpent: 456.80,
    lastVisit: "2025-01-14",
    status: "Active",
    loyalty: "Silver"
  },
  {
    id: "CUST003",
    name: "Mike Davis",
    email: "mike.davis@email.com",
    phone: "+1 (555) 345-6789",
    totalOrders: 23,
    totalSpent: 2156.75,
    lastVisit: "2025-01-13",
    status: "Active",
    loyalty: "Platinum"
  },
  {
    id: "CUST004",
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "+1 (555) 456-7890",
    totalOrders: 3,
    totalSpent: 89.25,
    lastVisit: "2025-01-10",
    status: "Inactive",
    loyalty: "Bronze"
  },
  {
    id: "CUST005",
    name: "David Brown",
    email: "david.brown@email.com",
    phone: "+1 (555) 567-8901",
    totalOrders: 12,
    totalSpent: 789.40,
    lastVisit: "2025-01-15",
    status: "Active",
    loyalty: "Silver"
  }
];

const getLoyaltyColor = (loyalty: string) => {
  switch (loyalty) {
    case "Platinum":
      return "bg-slate-700 text-white";
    case "Gold":
      return "bg-yellow-500 text-yellow-50";
    case "Silver":
      return "bg-slate-400 text-slate-50";
    case "Bronze":
      return "bg-amber-600 text-amber-50";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-success text-success-foreground";
    case "Inactive":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const Customers = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Customer Management</h1>
            <p className="text-muted-foreground">Manage your customer relationships and data</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Customer
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="w-4 h-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,156</div>
              <p className="text-xs text-muted-foreground">75.7% of total customers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$87.32</div>
              <p className="text-xs text-muted-foreground">+5.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loyalty Members</CardTitle>
              <Star className="w-4 h-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,892</div>
              <p className="text-xs text-muted-foreground">66.4% participation rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Customer List */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Database</CardTitle>
            <CardDescription>View and manage all customer information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact Info</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Loyalty Tier</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customersData.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                              {getInitials(customer.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{customer.name}</div>
                            <div className="text-sm text-muted-foreground">{customer.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm">{customer.email}</div>
                          <div className="text-sm text-muted-foreground">{customer.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                          {customer.totalOrders}
                        </div>
                      </TableCell>
                      <TableCell>${customer.totalSpent}</TableCell>
                      <TableCell>{customer.lastVisit}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(customer.status)}>
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getLoyaltyColor(customer.loyalty)}>
                          {customer.loyalty}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Customer Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Customers</CardTitle>
              <CardDescription>Highest spending customers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customersData.slice(0, 3).map((customer, index) => (
                  <div key={customer.id} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                        {getInitials(customer.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{customer.name}</div>
                      <div className="text-xs text-muted-foreground">${customer.totalSpent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loyalty Distribution</CardTitle>
              <CardDescription>Customer loyalty tier breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Platinum</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-1/5 bg-slate-700 h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm">20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Gold</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-1/3 bg-yellow-500 h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm">33%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Silver</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-2/5 bg-slate-400 h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm">40%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Bronze</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-1/12 bg-amber-600 h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm">7%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest customer interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>John Smith placed an order</span>
                  <span className="text-muted-foreground ml-auto">2h ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sarah Johnson joined loyalty program</span>
                  <span className="text-muted-foreground ml-auto">4h ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span>Mike Davis updated profile</span>
                  <span className="text-muted-foreground ml-auto">1d ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Customers;