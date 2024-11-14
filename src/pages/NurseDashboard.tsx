import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, List, Bell } from "lucide-react";

const NurseDashboard = () => {
  const appointments = [
    {
      id: 1,
      patientName: "John Smith",
      time: "09:00 AM",
      careType: "Elderly Care",
      date: "2024-02-20",
    },
    {
      id: 2,
      patientName: "Sarah Johnson",
      time: "02:30 PM",
      careType: "Physical Therapy",
      date: "2024-02-20",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Nurse Dashboard</h1>
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-medical-500" />
              <h2 className="text-lg font-semibold">Today's Schedule</h2>
            </div>
            <ScrollArea className="h-[400px]">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="p-3 border rounded-lg mb-3 hover:bg-medical-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{apt.patientName}</h3>
                    <span className="text-sm text-gray-500">{apt.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{apt.careType}</p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <List className="h-5 w-5 text-medical-500" />
              <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
            </div>
            <ScrollArea className="h-[400px]">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="p-3 border rounded-lg mb-3 hover:bg-medical-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{apt.patientName}</h3>
                    <span className="text-sm text-gray-500">{apt.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {apt.time} - {apt.careType}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NurseDashboard;