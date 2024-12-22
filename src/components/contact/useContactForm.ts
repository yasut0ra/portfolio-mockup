import { useState, FormEvent, ChangeEvent } from 'react';
import { Language } from '../../types';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function useContactForm(language: Language) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const errorMessages = {
      required: language === 'en' ? 'This field is required' : 'このフィールドは必須です',
      email: language === 'en' ? 'Please enter a valid email address' : '有効なメールアドレスを入力してください',
    };

    if (!formData.name.trim()) {
      newErrors.name = errorMessages.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = errorMessages.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = errorMessages.email;
    }

    if (!formData.message.trim()) {
      newErrors.message = errorMessages.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Show success message (you might want to handle this in the parent component)
      alert(language === 'en' ? 'Message sent successfully!' : 'メッセージが送信されました！');
    } catch (error) {
      // Handle error (you might want to show an error message to the user)
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}