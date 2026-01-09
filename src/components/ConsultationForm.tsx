import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Clock, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    serviceType: '',
    projectLocation: '',
    consultationType: '',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.mobile ||
      !formData.serviceType ||
      !formData.projectLocation
    ) {
      toast({
        title: 'Please fill required fields',
        description:
          'Name, mobile, service type and project location are required.',
        variant: 'destructive',
      });
      return;
    }

    // Success toast
    toast({
      title: 'Consultation Request Submitted!',
      description: 'We will contact you within 24 hours.',
    });

    // Reset form
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      serviceType: '',
      projectLocation: '',
      consultationType: '',
      preferredDate: '',
      message: '',
    });
  };

  return (
    <div className='bg-card rounded-2xl shadow-elegant-lg p-6 md:p-8 border border-border'>
      <div className='mb-6'>
        <h3 className='heading-sm text-foreground mb-2'>
          Book Your Free Architecture Consultation
        </h3>
        <p className='text-muted-foreground text-sm'>
          ඔබගේ details පුරවන්න, අපි 24 hours ඇතුළත ඔබට contact කරමු.
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-foreground mb-1.5'>
              Full Name <span className='text-destructive'>*</span>
            </label>
            <Input
              placeholder='Your full name'
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className='bg-background'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-foreground mb-1.5'>
              Mobile (WhatsApp) <span className='text-destructive'>*</span>
            </label>
            <Input
              placeholder='+94 77 270 9909'
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              className='bg-background'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-foreground mb-1.5'>
            Email (Optional)
          </label>
          <Input
            type='email'
            placeholder='your@email.com'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='bg-background'
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-foreground mb-1.5'>
              Service Type <span className='text-destructive'>*</span>
            </label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) =>
                setFormData({ ...formData, serviceType: value })
              }
            >
              <SelectTrigger className='bg-background'>
                <SelectValue placeholder='Select service' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='new-building'>
                  New Building Design
                </SelectItem>
                <SelectItem value='renovation'>
                  Renovation & Remodeling
                </SelectItem>
                <SelectItem value='interior'>Interior Design</SelectItem>
                <SelectItem value='3d-design'>
                  3D Design & Visualization
                </SelectItem>
                <SelectItem value='landscape'>Landscape Design</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className='block text-sm font-medium text-foreground mb-1.5'>
              Project Location <span className='text-destructive'>*</span>
            </label>
            <Input
              placeholder='City / District'
              value={formData.projectLocation}
              onChange={(e) =>
                setFormData({ ...formData, projectLocation: e.target.value })
              }
              className='bg-background'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium text-foreground mb-1.5'>
              Consultation Type
            </label>
            <Select
              value={formData.consultationType}
              onValueChange={(value) =>
                setFormData({ ...formData, consultationType: value })
              }
            >
              <SelectTrigger className='bg-background'>
                <SelectValue placeholder='Select type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='online'>Online Consultation</SelectItem>
                <SelectItem value='site-visit'>Site Visit</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className='block text-sm font-medium text-foreground mb-1.5'>
              Preferred Date
            </label>
            <Input
              type='date'
              value={formData.preferredDate}
              onChange={(e) =>
                setFormData({ ...formData, preferredDate: e.target.value })
              }
              className='bg-background'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-foreground mb-1.5'>
            Message / Project Requirements
          </label>
          <Textarea
            placeholder='Tell us about your project...'
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={3}
            className='bg-background resize-none'
          />
        </div>

        <Button type='submit' className='w-full' size='lg'>
          Book Free Consultation
        </Button>

        <p className='text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5'>
          <Clock className='w-3 h-3' />
          We will contact you within 24 hours
        </p>
      </form>
    </div>
  );
};

export default ConsultationForm;
