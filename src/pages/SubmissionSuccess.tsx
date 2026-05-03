import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  LayoutDashboard,
  Home } from
'lucide-react';
export function SubmissionSuccess() {
  return (
    <div className="flex-grow bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 text-center">
          
          {/* Animated Checkmark */}
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            
            <CheckCircle2 className="h-12 w-12 text-teal-600" />
          </motion.div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Request Submitted Successfully
          </h1>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Your medical intake form and payment have been received. A licensed
            provider is now reviewing your case.
          </p>

          {/* Status Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-center gap-3 mb-10 inline-flex mx-auto">
            <Clock className="h-5 w-5 text-amber-600" />
            <div className="text-left">
              <p className="text-sm font-semibold text-amber-900">
                Status: Pending Review
              </p>
              <p className="text-xs text-amber-700">
                Estimated review time: 24-48 hours
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-md mx-auto mb-12 text-left relative">
            {/* Connecting Line */}
            <div className="absolute left-[1.125rem] top-4 bottom-4 w-0.5 bg-slate-200 -z-10"></div>

            <div className="space-y-6">
              {/* Step 1: Completed */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 shadow-sm border-4 border-white">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-bold text-slate-900">
                    Request Submitted
                  </h3>
                  <p className="text-xs text-slate-500">
                    Intake form and payment received
                  </p>
                </div>
              </div>

              {/* Step 2: In Progress */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm border-4 border-white">
                  <div className="w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-bold text-slate-900">
                    Under Medical Review
                  </h3>
                  <p className="text-xs text-slate-500">
                    A licensed provider is reviewing your case
                  </p>
                </div>
              </div>

              {/* Step 3: Upcoming */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 shadow-sm border-4 border-white">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-semibold text-slate-400">
                    Decision Pending
                  </h3>
                  <p className="text-xs text-slate-400">
                    Treatment plan approval or refund
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors shadow-sm">
              
              <LayoutDashboard className="h-4 w-4" />
              View Dashboard
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl text-sm font-medium transition-colors shadow-sm">
              
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>);

}