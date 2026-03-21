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
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

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
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-muted animate-in fade-in zoom-in duration-500">
        <div className="h-20 w-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="font-headline text-3xl font-black mb-4">Thank You!</h3>
        <p className="text-muted-foreground text-lg mb-8 font-semibold">
          Your catalogue request has been received. Please check your email for the download link.
        </p>
        <Button onClick={() => setStep(1)} variant="outline" className="h-12 px-8 font-bold rounded-lg">Request Another</Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-muted-foreground/5 max-w-lg mx-auto overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-muted">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out" 
          style={{ width: `${(step / 2) * 100}%` }}
        ></div>
      </div>

      <div className="text-center mb-10 pt-4">
        <h3 className="font-headline text-3xl font-black mb-4 text-foreground tracking-tight">
          Request for Catalogue
        </h3>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-[11px] font-black text-primary uppercase tracking-widest">
          Step {step} of 2
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-6 duration-400">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-black text-foreground text-xs uppercase tracking-wider">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. Rahul Sharma" 
                        {...field} 
                        className="h-14 border-muted bg-muted/20 focus-visible:ring-primary focus-visible:bg-white transition-all rounded-xl font-semibold"
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
                    <FormLabel className="font-black text-foreground text-xs uppercase tracking-wider">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+91 00000 00000" 
                        {...field} 
                        className="h-14 border-muted bg-muted/20 focus-visible:ring-primary focus-visible:bg-white transition-all rounded-xl font-semibold"
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
                    <FormLabel className="font-black text-foreground text-xs uppercase tracking-wider">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="rahul@company.com" 
                        {...field} 
                        className="h-14 border-muted bg-muted/20 focus-visible:ring-primary focus-visible:bg-white transition-all rounded-xl font-semibold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" onClick={nextStep} className="w-full bg-primary hover:bg-primary/90 h-14 text-base font-black rounded-xl mt-6 group shadow-lg shadow-primary/20">
                Next <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-6 duration-400">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-black text-foreground text-xs uppercase tracking-wider">Company Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Company or Workplace" 
                        {...field} 
                        className="h-14 border-muted bg-muted/20 focus-visible:ring-primary focus-visible:bg-white transition-all rounded-xl font-semibold"
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
                    <FormLabel className="font-black text-foreground text-xs uppercase tracking-wider">Requirement Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-14 border-muted bg-muted/20 rounded-xl font-semibold">
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
              <div className="flex gap-4 pt-6">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 h-14 font-black border-muted rounded-xl hover:bg-muted/50">
                  Back
                </Button>
                <Button type="submit" className="flex-[2] bg-primary hover:bg-primary/90 h-14 text-base font-black rounded-xl shadow-lg shadow-primary/20" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
      
      <p className="mt-10 text-center text-xs text-muted-foreground font-semibold opacity-60">
        By submitting, you agree to receive the digital catalogue and communication from Paradise Furniture Varanasi.
      </p>
    </div>
  );
}
