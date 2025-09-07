import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-vidaxl-primary">
            Information
          </DialogTitle>
        </DialogHeader>
        <div className="text-center py-6">
          <p className="text-muted-foreground">
            © VidaXL and Swetha. All rights reserved.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};