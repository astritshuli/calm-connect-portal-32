import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Video, Clock } from "lucide-react";

const NurseProfile = () => {
  const availabilityTimes = [
    "9:00 AM - 12:00 PM",
    "2:00 PM - 5:00 PM",
    "7:00 PM - 10:00 PM",
  ];

  return (
    <div className="min-h-screen bg-medical-50 pb-16">
      {/* Profile Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold">Sarah Johnson</h1>
            <p className="text-medical-400">Registered Nurse, Critical Care</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(48 reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Qualifications */}
      <div className="p-6">
        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Experience</h2>
            <p className="text-gray-600">15+ years in critical care nursing</p>
            <div className="mt-4">
              <h3 className="font-medium mb-2">Qualifications</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>BSN from University of Washington</li>
                <li>Critical Care Certification</li>
                <li>Advanced Cardiac Life Support</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Availability */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Available Times</h2>
            <div className="space-y-3">
              {availabilityTimes.map((time) => (
                <div
                  key={time}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <Clock className="h-4 w-4" />
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-medical-200 hover:bg-medical-300">
            Book Appointment
          </Button>
          <Button
            variant="outline"
            className="w-full border-medical-200 text-medical-400"
          >
            <Video className="mr-2 h-4 w-4" />
            Schedule Video Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NurseProfile;