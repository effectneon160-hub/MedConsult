import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  FileText,
  CreditCard,
  Send,
  Stethoscope,
  CheckCircle2,
  Bell,
  ArrowRight,
  ArrowDown } from
'lucide-react';
export function SystemFlow() {
  const steps = [
  {
    id: 1,
    title: 'Patient Initiates',
    desc: 'Patient visits platform and starts assessment.',
    icon: <User className="h-6 w-6" />,
    color: 'bg-teal-600',
    textColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 2,
    title: 'Intake Form',
    desc: 'Collects medical history and current symptoms.',
    icon: <FileText className="h-6 w-6" />,
    color: 'bg-teal-600',
    textColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 3,
    title: 'Payment',
    desc: 'Consultation fee processed securely.',
    icon: <CreditCard className="h-6 w-6" />,
    color: 'bg-teal-600',
    textColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    id: 4,
    title: 'Submission',
    desc: 'Data encrypted and sent to provider queue.',
    icon: <Send className="h-6 w-6" />,
    color: 'bg-amber-500',
    textColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    isCurrent: true
  },
  {
    id: 5,
    title: 'Doctor Review',
    desc: 'Licensed provider reviews case details.',
    icon: <Stethoscope className="h-6 w-6" />,
    color: 'bg-slate-300',
    textColor: 'text-slate-500',
    bgColor: 'bg-white',
    borderColor: 'border-slate-200'
  },
  {
    id: 6,
    title: 'Decision',
    desc: 'Approve treatment, request info, or reject.',
    icon: <CheckCircle2 className="h-6 w-6" />,
    color: 'bg-slate-300',
    textColor: 'text-slate-500',
    bgColor: 'bg-white',
    borderColor: 'border-slate-200'
  },
  {
    id: 7,
    title: 'Status Update',
    desc: "Patient notified of provider's decision.",
    icon: <Bell className="h-6 w-6" />,
    color: 'bg-slate-300',
    textColor: 'text-slate-500',
    bgColor: 'bg-white',
    borderColor: 'border-slate-200'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };
  return (
    <div className="flex-grow bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            System Architecture Flow
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Visual representation of the end-to-end patient journey and data
            flow within the MedConsult platform.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative">
          
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[5%] right-[5%] h-1 bg-slate-200 -z-10 rounded-full"></div>

          {/* Active progress line */}
          <motion.div
            initial={{
              width: 0
            }}
            animate={{
              width: '45%'
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }}
            className="hidden md:block absolute top-[4.5rem] left-[5%] h-1 bg-teal-500 -z-10 rounded-full">
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-24 gap-x-6">
            {/* Top Row (1-4) */}
            {steps.slice(0, 4).map((step, idx) =>
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative flex flex-col items-center">
              
                {/* Mobile connecting line */}
                {idx < 3 &&
              <div className="md:hidden absolute top-[4.5rem] left-1/2 w-0.5 h-12 bg-teal-500 -z-10"></div>
              }

                <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 relative z-10 ${step.color} ${step.isCurrent ? 'ring-4 ring-amber-200 ring-offset-2' : ''}`}>
                
                  {step.icon}
                  {step.isCurrent &&
                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white"></span>
                    </span>
                }
                </div>

                <div
                className={`w-full p-4 rounded-xl border text-center ${step.bgColor} ${step.borderColor}`}>
                
                  <h3 className={`text-sm font-bold mb-1 ${step.textColor}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600">{step.desc}</p>
                </div>
              </motion.div>
            )}

            {/* Connecting arrow from row 1 to row 2 (Desktop only) */}
            <div className="hidden md:flex col-span-4 justify-end pr-[12.5%] -mt-12 mb-4 relative z-0">
              <div className="w-1 h-16 bg-slate-200 rounded-full"></div>
            </div>

            {/* Bottom Row (5-7) - Reversed visually for snake layout on desktop */}
            <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-6 md:flex md:flex-row-reverse md:justify-end">
              {/* Desktop connecting line for bottom row */}
              <div className="hidden md:block absolute bottom-[8.5rem] left-[15%] right-[15%] h-1 bg-slate-200 -z-10 rounded-full"></div>

              {steps.slice(4).map((step, idx) =>
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative flex flex-col items-center md:w-1/4 md:px-3">
                
                  {/* Mobile connecting line */}
                  <div className="md:hidden absolute -top-12 left-1/2 w-0.5 h-12 bg-slate-200 -z-10"></div>

                  <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-sm mb-6 relative z-10 ${step.color}`}>
                  
                    {step.icon}
                  </div>

                  <div
                  className={`w-full p-4 rounded-xl border text-center ${step.bgColor} ${step.borderColor}`}>
                  
                    <h3 className={`text-sm font-bold mb-1 ${step.textColor}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600">{step.desc}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.5
          }}
          className="mt-20 flex justify-center gap-6 text-sm">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-500"></div>
            <span className="text-slate-600">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-slate-600">Current Stage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <span className="text-slate-600">Pending</span>
          </div>
        </motion.div>
      </div>
    </div>);

}