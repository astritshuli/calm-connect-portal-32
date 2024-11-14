import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  DollarSign,
  MessageCircle,
  X,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-medical-50 pb-16 px-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">
            Your appointment has been successfully scheduled
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-medical-400" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-gray-600">Monday, March 15, 2024 - 9:00 AM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-medical-400" />
                <div>
                  <p className="font-medium">Nurse</p>
                  <p className="text-gray-600">Sarah Johnson</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-medical-400" />
                <div>
                  <p className="font-medium">Service</p>
                  <p className="text-gray-600">Elderly Care - 2 Hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-medical-400" />
                <div>
                  <p className="font-medium">Total Cost</p>
                  <p className="text-gray-600">$120.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button className="w-full bg-medical-200 hover:bg-medical-300">
            <Plus className="mr-2 h-4 w-4" /> Add to Calendar
          </Button>
          
          <Button
            variant="outline"
            className="w-full border-medical-200 text-medical-400"
          >
            <MessageCircle className="mr-2 h-4 w-4" /> Message Nurse
          </Button>
          
          <Button
            variant="outline"
            className="w-full border-red-200 text-red-500 hover:bg-red-50"
            onClick={() => navigate("/home")}
          >
            <X className="mr-2 h-4 w-4" /> Cancel Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;