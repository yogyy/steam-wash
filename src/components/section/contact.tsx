import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-blue-600 py-12 text-white md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Book your steam wash appointment today and experience the
              difference
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="cursor-pointer bg-white text-blue-600 hover:bg-gray-100"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (555) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:text-background cursor-pointer border-white bg-transparent text-white hover:bg-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-2 text-center">
            <MapPin className="h-8 w-8 text-blue-200" />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-blue-100">
              123 Main Street
              <br />
              Your City, ST 12345
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <Clock className="h-8 w-8 text-blue-200" />
            <h3 className="text-lg font-semibold">Hours</h3>
            <p className="text-blue-100">
              Mon-Sat: 8AM-6PM
              <br />
              Sunday: 10AM-4PM
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <Phone className="h-8 w-8 text-blue-200" />
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-blue-100">
              (555) 123-4567
              <br />
              info@steamwashpro.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
