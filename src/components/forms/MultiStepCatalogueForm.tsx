"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot } from "@/app/actions/hubspot";
import { CheckCircle2, Loader2 } from "lucide-react";

const step1Schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
});

const step2Schema = z.object({
  company: z.string().min(2, "Company name is required"),
  quantity: z.string().optional(),
});

export function MultiStepCatalogueForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(step === 1 ? step1Schema : step2Schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      company: "",
      quantity: "1-5",
    },
  });

  const nextStep = async () => {
    const isValid = await form.trigger(["fullName", "phone", "email"]);
    if (isValid) setStep(2);
  };

  const onSubmit = async (values: any) => {
    setIsSubmitting(true);
    try {
      const result = await submitToHubSpot(values);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        form.reset();
        setStep(3); // Completed state
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 3) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.1)] border border-muted animate-in fade-in zoom-in duration-300">
        <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-headline text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6 font-medium">
          Your catalogue request has been received. Please check your email for the download link.
        </p>
        <Button onClick={() => setStep(1)} variant="outline">Request Another</Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.1)] border border-muted-foreground/10 max-w-md mx-auto">
      <div className="text-center mb-10">
        <h3 className="font-headline text-3xl font-extrabold mb-4 text-foreground">
          Request for Catalogue
        </h3>
        <span className="text-sm font-bold text-primary uppercase tracking-widest block">
          Step {step} of 2
        </span>
        <div className="w-full h-px bg-muted mt-4"></div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-foreground">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        {...field} 
                        className="h-12 border-muted bg-background focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-foreground">Phone</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="9876543210" 
                        {...field} 
                        className="h-12 border-muted bg-background focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-foreground">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="username@example.com" 
                        {...field} 
                        className="h-12 border-muted bg-background focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" onClick={nextStep} className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-bold rounded-lg mt-4 transition-all">
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-foreground">Company Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Company Name" 
                        {...field} 
                        className="h-12 border-muted bg-background focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-foreground">Estimated Quantity</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 border-muted">
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 Chairs</SelectItem>
                        <SelectItem value="5-20">5-20 Chairs</SelectItem>
                        <SelectItem value="20-50">20-50 Chairs</SelectItem>
                        <SelectItem value="50+">50+ (Bulk Enquiry)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 h-12 font-bold border-muted">
                  Back
                </Button>
                <Button type="submit" className="flex-[2] bg-primary hover:bg-primary/90 h-12 text-base font-bold rounded-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
