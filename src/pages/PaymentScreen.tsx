import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CreditCard,
  Lock,
  CheckCircle2,
  ArrowRight } from
'lucide-react';
export function PaymentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  // Get data from previous step if available, otherwise use defaults
  const formData = location.state?.formData || {
    fullName: 'John Carter',
    condition: 'Erectile Dysfunction'
  };
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      navigate('/success');
    }, 1500);
  };
  return (
    <div className="flex-grow bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Column: Order Summary */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="lg:col-span-2 space-y-6">
          
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Complete Request
            </h1>
            <p className="text-slate-600 text-sm">
              Review your consultation details and complete payment to submit
              your request.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="font-semibold text-slate-900 mb-4">
                Consultation Summary
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between pb-4 border-b border-slate-100">
                  <span className="text-slate-500">Patient Name</span>
                  <span className="font-medium text-slate-900">
                    {formData.fullName}
                  </span>
                </div>
                <div className="flex justify-between pb-4 border-b border-slate-100">
                  <span className="text-slate-500">Condition</span>
                  <span className="font-medium text-slate-900">
                    {formData.condition === 'Other' ?
                    formData.customCondition :
                    formData.condition}
                  </span>
                </div>
                <div className="flex justify-between pb-4 border-b border-slate-100">
                  <span className="text-slate-500">Provider Review</span>
                  <span className="font-medium text-slate-900">Included</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-base font-semibold text-slate-900">
                    Total Due
                  </span>
                  <span className="text-xl font-bold text-teal-600">
                    $49.00
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  If our medical providers determine you are not eligible for
                  treatment, your consultation fee will be fully refunded.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Payment Form */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1
          }}
          className="lg:col-span-3">
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Payment Details
              </h2>
              <div className="flex gap-2">
                {/* Simulated card icons */}
                <div className="w-8 h-5 bg-slate-200 rounded border border-slate-300"></div>
                <div className="w-8 h-5 bg-slate-200 rounded border border-slate-300"></div>
                <div className="w-8 h-5 bg-slate-200 rounded border border-slate-300"></div>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Card Information
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="0000 0000 0000 0000"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all font-mono" />
                  
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all font-mono" />
                  
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    CVC
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all font-mono" />
                  
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Name on Card
                </label>
                <input
                  type="text"
                  required
                  defaultValue={formData.fullName}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-xl text-lg font-medium transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
                  
                  {isProcessing ?
                  <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </div> :

                  <>
                      <Lock className="h-5 w-5" />
                      Pay $49.00 & Submit
                    </>
                  }
                </button>
                <p className="text-center text-sm text-slate-500 mt-4 flex items-center justify-center gap-1.5">
                  <Lock className="h-4 w-4" />
                  Payment confirms submission of your medical request.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>);

}