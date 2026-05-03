import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  CheckCircle2,
  AlertCircle } from
'lucide-react';
type FormData = {
  fullName: string;
  email: string;
  sex: string;
  age: string;
  condition: string;
  customCondition: string;
  duration: string;
  previousTreatment: string;
  medicationName: string;
  treatmentDuration: string;
  symptoms: string;
};
const initialFormData: FormData = {
  fullName: 'John Carter',
  email: 'john.carter@example.com',
  sex: 'Male',
  age: '42',
  condition: '',
  customCondition: '',
  duration: '',
  previousTreatment: '',
  medicationName: '',
  treatmentDuration: '',
  symptoms: ''
};
export function IntakeFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const navigate = useNavigate();
  const updateForm = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleSubmit = () => {
    // In a real app, we might save this to context or local storage
    // For MVP, we just navigate to payment
    navigate('/payment', {
      state: {
        formData
      }
    });
  };
  const progressPercentage = step / 3 * 100;
  return (
    <div className="flex-grow bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header & Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-900">
              Medical Assessment
            </h1>
            <span className="text-sm font-medium text-slate-500">
              Step {step} of 3
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className="bg-teal-600 h-2.5 rounded-full"
              initial={{
                width: 0
              }}
              animate={{
                width: `${progressPercentage}%`
              }}
              transition={{
                duration: 0.3
              }} />
            
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Trust Indicator */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center gap-2 text-sm text-slate-600">
            <ShieldCheck className="h-4 w-4 text-teal-600" />
            <span>Your information is secure and HIPAA-conscious.</span>
          </div>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {/* STEP 1: Personal Info */}
              {step === 1 &&
              <motion.div
                key="step1"
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                transition={{
                  duration: 0.3
                }}
                className="space-y-6">
                
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-1">
                      Personal Information
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Please verify your basic details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateForm('fullName', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                    
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Email Address
                      </label>
                      <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                    
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Biological Sex
                      </label>
                      <select
                      value={formData.sex}
                      onChange={(e) => updateForm('sex', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white">
                      
                        <option value="">Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Age
                      </label>
                      <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => updateForm('age', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                    
                    </div>
                  </div>
                </motion.div>
              }

              {/* STEP 2: Medical Info */}
              {step === 2 &&
              <motion.div
                key="step2"
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                transition={{
                  duration: 0.3
                }}
                className="space-y-6">
                
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-1">
                      Tell us about your condition
                    </h2>
                    <p className="text-slate-500 text-sm">
                      This helps our providers understand your needs.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Primary Condition
                      </label>
                      <select
                      value={formData.condition}
                      onChange={(e) =>
                      updateForm('condition', e.target.value)
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white">
                      
                        <option value="">Select condition...</option>
                        <option value="Erectile Dysfunction">
                          Erectile Dysfunction
                        </option>
                        <option value="Hair Loss">Hair Loss</option>
                        <option value="Weight Management">
                          Weight Management
                        </option>
                        <option value="Anxiety">Anxiety</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {formData.condition === 'Other' &&
                  <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                          Please specify
                        </label>
                        <input
                      type="text"
                      value={formData.customCondition}
                      onChange={(e) =>
                      updateForm('customCondition', e.target.value)
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                    
                      </div>
                  }

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Duration of condition
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                      '<1 month',
                      '1-6 months',
                      '6-12 months',
                      '1+ year'].
                      map((dur) =>
                      <button
                        key={dur}
                        onClick={() => updateForm('duration', dur)}
                        className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${formData.duration === dur ? 'bg-teal-50 border-teal-600 text-teal-700' : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'}`}>
                        
                            {dur}
                          </button>
                      )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Previous treatment for this condition?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                          type="radio"
                          name="prevTreatment"
                          checked={formData.previousTreatment === 'Yes'}
                          onChange={() =>
                          updateForm('previousTreatment', 'Yes')
                          }
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500" />
                        
                          <span className="text-slate-700">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                          type="radio"
                          name="prevTreatment"
                          checked={formData.previousTreatment === 'No'}
                          onChange={() =>
                          updateForm('previousTreatment', 'No')
                          }
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500" />
                        
                          <span className="text-slate-700">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.previousTreatment === 'Yes' &&
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-slate-700">
                            Medication Name
                          </label>
                          <input
                        type="text"
                        value={formData.medicationName}
                        onChange={(e) =>
                        updateForm('medicationName', e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 outline-none"
                        placeholder="e.g. Sildenafil" />
                      
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-slate-700">
                            Treatment Duration
                          </label>
                          <input
                        type="text"
                        value={formData.treatmentDuration}
                        onChange={(e) =>
                        updateForm('treatmentDuration', e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 outline-none"
                        placeholder="e.g. 3 months" />
                      
                        </div>
                      </div>
                  }

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Current Symptoms
                      </label>
                      <textarea
                      value={formData.symptoms}
                      onChange={(e) => updateForm('symptoms', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none"
                      placeholder="Please describe your symptoms in detail..." />
                    
                    </div>
                  </div>
                </motion.div>
              }

              {/* STEP 3: Review */}
              {step === 3 &&
              <motion.div
                key="step3"
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                transition={{
                  duration: 0.3
                }}
                className="space-y-6">
                
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-1">
                      Review Your Information
                    </h2>
                    <p className="text-slate-500 text-sm">
                      Please confirm your details before proceeding to payment.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Personal Summary */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-slate-900 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-teal-600" />
                          Personal Details
                        </h3>
                        <button
                        onClick={() => setStep(1)}
                        className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                        
                          Edit
                        </button>
                      </div>
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                        <div>
                          <dt className="text-slate-500">Full Name</dt>
                          <dd className="font-medium text-slate-900">
                            {formData.fullName || '-'}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Email</dt>
                          <dd className="font-medium text-slate-900">
                            {formData.email || '-'}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Sex</dt>
                          <dd className="font-medium text-slate-900">
                            {formData.sex || '-'}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate-500">Age</dt>
                          <dd className="font-medium text-slate-900">
                            {formData.age || '-'}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    {/* Medical Summary */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-slate-900 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-teal-600" />
                          Medical Information
                        </h3>
                        <button
                        onClick={() => setStep(2)}
                        className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                        
                          Edit
                        </button>
                      </div>
                      <dl className="space-y-4 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <dt className="text-slate-500">Condition</dt>
                            <dd className="font-medium text-slate-900">
                              {formData.condition === 'Other' ?
                            formData.customCondition :
                            formData.condition || '-'}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-slate-500">Duration</dt>
                            <dd className="font-medium text-slate-900">
                              {formData.duration || '-'}
                            </dd>
                          </div>
                        </div>

                        <div>
                          <dt className="text-slate-500">Previous Treatment</dt>
                          <dd className="font-medium text-slate-900">
                            {formData.previousTreatment === 'Yes' ?
                          `Yes (${formData.medicationName} for ${formData.treatmentDuration})` :
                          formData.previousTreatment || '-'}
                          </dd>
                        </div>

                        <div>
                          <dt className="text-slate-500">Symptoms</dt>
                          <dd className="font-medium text-slate-900 mt-1 bg-white p-3 rounded border border-slate-200">
                            {formData.symptoms || 'No symptoms described.'}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800">
                        By continuing, you confirm that the information provided
                        is accurate to the best of your knowledge. A licensed
                        provider will review this information.
                      </p>
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={handleBack}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${step === 1 ? 'text-slate-400 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-200'}`}
              disabled={step === 1}>
              
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>

            {step < 3 ?
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
              
                Next Step
                <ChevronRight className="h-4 w-4" />
              </button> :

            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
              
                Continue to Payment
                <ChevronRight className="h-4 w-4" />
              </button>
            }
          </div>
        </div>
      </div>
    </div>);

}