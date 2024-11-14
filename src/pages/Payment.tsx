import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign } from "lucide-react";

const Payment = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card className="bg-white">
        <CardHeader className="space-y-1">
          <h2 className="text-2xl font-bold text-center">Payment Details</h2>
          <p className="text-center text-gray-500">Complete your booking payment</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">Service Breakdown</h3>
            <div className="bg-medical-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span>Nursing Care (2 hours)</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>$10.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total</span>
                <span>$130.00</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Card Number</label>
            <div className="relative">
              <Input placeholder="1234 5678 9012 3456" />
              <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Expiry Date</label>
              <Input placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">CVV</label>
              <Input placeholder="123" type="password" maxLength={3} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Name on Card</label>
            <Input placeholder="John Doe" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">
            <DollarSign className="mr-2 h-4 w-4" /> Pay Now $130.00
          </Button>
          <Button variant="outline" className="w-full">
            Add Payment Method
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Payment;