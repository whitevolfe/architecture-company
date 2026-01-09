import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ConsultationForm from './ConsultationForm';

const ConsultationModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='lg'>Book Free Consultation</Button>
      </DialogTrigger>
      <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-center text-2xl'>
            Book Your Free Architecture Consultation
          </DialogTitle>
        </DialogHeader>
        <ConsultationForm />
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
