import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Calendar as CalendarIcon, Clock, FileText } from "lucide-react";

const BookingSchedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [serviceType, setServiceType] = useState("elderly-care");
  const navigate = useNavigate();

  const handleBooking = () => {
    // In a real app, this would submit the booking data to an API
    navigate("/booking-confirmation");
  };

  return (
    <div className="min-h-screen bg-medical-50 pb-16 px-4">
      <div className="max-w-2xl mx-auto pt-8">
        <h1 className="text-2xl font-semibold mb-6">Schedule Your Care</h1>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="h-5 w-5 text-medical-400" />
              <h2 className="text-lg font-medium">Select Date & Time</h2>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-medical-400" />
              <h2 className="text-lg font-medium">Service Type</h2>
            </div>
            <select
              className="w-full p-2 border rounded-md"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="elderly-care">Elderly Care</option>
              <option value="physical-therapy">Physical Therapy</option>
              <option value="post-surgical">Post-Surgical Care</option>
              <option value="urgent-care">Urgent Care</option>
            </select>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-medical-400" />
              <h2 className="text-lg font-medium">Special Instructions</h2>
            </div>
            <Textarea
              placeholder="Add any special requirements or notes for the nurse..."
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button
            onClick={handleBooking}
            className="flex-1 bg-medical-300 hover:bg-medical-400"
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingSchedule;