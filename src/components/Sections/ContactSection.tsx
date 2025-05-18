
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
  
  const onSubmit = async (data: FormValues) => {
    try {
      // In a real application, you would send this data to a server
      console.log("Form data submitted:", data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me for any inquiries, collaborations, or opportunities. I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:sarveshkumar.sasikumar@gmail.com" className="text-blue-600 hover:underline">
                      sarveshkumar.sasikumar@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+918883568741" className="text-blue-600 hover:underline">
                      +91 8883568741
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/sarveshkumar-s-s-software-developer/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      sarveshkumar-s-s-software-developer
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Github className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      github.com/sarveshkumar
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input 
                        id="name"
                        placeholder="Your name"
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Your email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="Subject of your message"
                      {...register("subject", { required: "Subject is required" })}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Your message"
                      rows={6}
                      {...register("message", { required: "Message is required" })}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
