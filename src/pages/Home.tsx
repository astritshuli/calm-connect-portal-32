import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Home, Calendar, MessageSquare, User, Ambulance, Activity, Heart, Hospital } from "lucide-react";

const HomePage = () => {
  const categories = [
    { name: "Urgent Care", icon: <Ambulance className="h-6 w-6" />, color: "bg-red-100" },
    { name: "Elderly Care", icon: <Heart className="h-6 w-6" />, color: "bg-blue-100" },
    { name: "Physical Therapy", icon: <Activity className="h-6 w-6" />, color: "bg-green-100" },
    { name: "Post-Surgical Care", icon: <Hospital className="h-6 w-6" />, color: "bg-purple-100" },
  ];

  return (
    <div className="min-h-screen bg-medical-50 pb-16">
      {/* Search Section */}
      <div className="p-4 bg-white shadow-sm">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search for nurses or services..."
            className="pl-10 pr-4 w-full"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="border-none shadow-sm">
              <CardContent className="p-4">
                <div className={`${category.color} p-3 rounded-full w-fit mb-3`}>
                  {category.icon}
                </div>
                <h3 className="font-medium">{category.name}</h3>
                <Button variant="link" className="p-0 h-auto mt-2 text-medical-400">
                  Book Now →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center text-medical-400">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Calendar className="h-6 w-6" />
            <span className="text-xs mt-1">Appointments</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <MessageSquare className="h-6 w-6" />
            <span className="text-xs mt-1">Messages</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;