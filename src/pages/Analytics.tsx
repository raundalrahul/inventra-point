import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SalesChart from "@/components/charts/SalesChart";
import CategoryChart from "@/components/charts/CategoryChart";
import { BarChart3, TrendingUp, TrendingDown, Download, Calendar } from "lucide-react";

const topProducts = [
  { name: "Wireless Bluetooth Headphones", sales: 89, revenue: 7111, growth: 12.5 },
  { name: "Cotton T-Shirt", sales: 67, revenue: 1675, growth: -3.2 },
  { name: "Ceramic Coffee Mug", sales: 54, revenue: 850.5, growth: 8.7 },
  { name: "Organic Green Tea", sales: 43, revenue: 537.5, growth: 15.3 },
  { name: "Vitamin D Supplements", sales: 32, revenue: 607.68, growth: -1.8 }
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sales Analytics</h1>
            <p className="text-muted-foreground">Detailed insights into your business performance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date Range
            </Button>
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
              <TrendingUp className="w-4 h-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">+18.2%</div>
              <p className="text-xs text-muted-foreground">vs last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.8%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="w-4 h-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68.4%</div>
              <p className="text-xs text-muted-foreground">+5.2% improvement</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Retention</CardTitle>
              <TrendingDown className="w-4 h-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">72.1%</div>
              <p className="text-xs text-muted-foreground">-1.3% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Trend</CardTitle>
              <CardDescription>Revenue performance over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Category Performance</CardTitle>
              <CardDescription>Revenue distribution by product categories</CardDescription>
            </CardHeader>
            <CardContent>
              <CategoryChart />
            </CardContent>
          </Card>
        </div>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
            <CardDescription>Best selling products and their performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{product.name}</h4>
                    <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                      <span>Sales: {product.sales} units</span>
                      <span>Revenue: ${product.revenue}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      className={product.growth >= 0 
                        ? "bg-success text-success-foreground" 
                        : "bg-error text-error-foreground"
                      }
                    >
                      {product.growth >= 0 ? '+' : ''}{product.growth}%
                    </Badge>
                    <span className="text-2xl font-bold text-muted-foreground">#{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Peak Sales Hours</CardTitle>
              <CardDescription>When your store performs best</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">10:00 AM - 12:00 PM</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-4/5 bg-primary h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">2:00 PM - 4:00 PM</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-3/5 bg-primary h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">6:00 PM - 8:00 PM</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-2/5 bg-primary h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sales by Day</CardTitle>
              <CardDescription>Weekly performance breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Monday</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-3/4 bg-primary h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">$432</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Friday</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-full bg-primary h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">$578</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Saturday</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div className="w-4/5 bg-primary h-2 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">$467</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;