import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Settings2,
  CreditCard,
  Bell,
  MessageSquare,
  Sun,
  Moon,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAlbanian, setIsAlbanian] = useState(false);
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    toast({
      title: isDarkMode ? "Light mode enabled" : "Dark mode enabled",
      duration: 2000,
    });
  };

  const toggleLanguage = () => {
    setIsAlbanian(!isAlbanian);
    toast({
      title: isAlbanian ? "English enabled" : "Albanian enabled",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-medical-50 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        {isAlbanian ? "Cilësimet" : "Settings"}
      </h1>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Settings2 className="h-5 w-5 text-medical-400" />
                <Label>{isAlbanian ? "Informacioni Personal" : "Personal Information"}</Label>
              </div>
              <Button variant="outline">
                {isAlbanian ? "Ndrysho" : "Edit"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-medical-400" />
                <Label>{isAlbanian ? "Metodat e Pagesës" : "Payment Methods"}</Label>
              </div>
              <Button variant="outline">
                {isAlbanian ? "Menaxho" : "Manage"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-medical-400" />
                <Label>{isAlbanian ? "Njoftimet" : "Notifications"}</Label>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sun className="h-5 w-5 text-medical-400" />
                <Label>{isAlbanian ? "Tema e Errët" : "Dark Theme"}</Label>
              </div>
              <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-medical-400" />
                <Label>{isAlbanian ? "Gjuha" : "Language"}</Label>
              </div>
              <Switch checked={isAlbanian} onCheckedChange={toggleLanguage} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <Button className="w-full" variant="outline">
              <MessageSquare className="mr-2 h-5 w-5" />
              {isAlbanian ? "Kontakto Mbështetjen" : "Contact Support"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;