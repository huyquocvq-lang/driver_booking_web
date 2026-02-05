import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { sendBookingEmail } from '../utils/emailService';

interface BookingFormData {
  name: string;
  phone: string;
  pickupTime: string;
  pickupLocation: string;
  dropoffLocation: string;
}

interface BookingFormProps {
  onSuccess?: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendBookingEmail(data);
      
      if (success) {
        setSubmitStatus('success');
        reset();
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Tên khách hàng <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Vui lòng nhập tên' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
          placeholder="Nhập tên của bạn"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', {
            required: 'Vui lòng nhập số điện thoại',
            pattern: {
              value: /^[0-9]{10,11}$/,
              message: 'Số điện thoại không hợp lệ',
            },
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
          placeholder="Nhập số điện thoại"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-2">
          Thời gian đón <span className="text-red-500">*</span>
        </label>
        <input
          type="datetime-local"
          id="pickupTime"
          {...register('pickupTime', { required: 'Vui lòng chọn thời gian đón' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
        />
        {errors.pickupTime && (
          <p className="mt-1 text-sm text-red-500">{errors.pickupTime.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
          Điểm đón <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="pickupLocation"
          {...register('pickupLocation', { required: 'Vui lòng nhập điểm đón' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
          placeholder="Nhập địa chỉ điểm đón"
        />
        {errors.pickupLocation && (
          <p className="mt-1 text-sm text-red-500">{errors.pickupLocation.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-2">
          Điểm trả <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="dropoffLocation"
          {...register('dropoffLocation', { required: 'Vui lòng nhập điểm trả' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
          placeholder="Nhập địa chỉ điểm trả"
        />
        {errors.dropoffLocation && (
          <p className="mt-1 text-sm text-red-500">{errors.dropoffLocation.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Đặt xe thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          Có lỗi xảy ra. Vui lòng thử lại hoặc gọi trực tiếp: 0975.468.363
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-red-pink text-white px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Đang gửi...' : 'Xác nhận đặt xe'}
      </button>
    </form>
  );
}
