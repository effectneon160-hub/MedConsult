import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileIcon,
  Send,
  User,
  Activity,
  ShieldCheck,
  ChevronRight } from
'lucide-react';
import { MOCK_PATIENT } from '../utils/mockData';
export function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div className="flex-grow bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Patient Portal
            </h1>
            <p className="text-slate-500 text-sm">
              Welcome back, {MOCK_PATIENT.name.split(' ')[0]}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
            <ShieldCheck className="h-5 w-5 text-teal-600" />
            <span className="text-sm font-medium text-slate-700">
              Secure Session
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation & Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <nav className="flex flex-col">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'}`}>
                  
                  <LayoutDashboard className="h-5 w-5" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'messages' ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'}`}>
                  
                  <MessageSquare className="h-5 w-5" />
                  Messages
                  <span className="ml-auto bg-slate-100 text-slate-600 py-0.5 px-2 rounded-full text-xs">
                    0
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'documents' ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'}`}>
                  
                  <FileText className="h-5 w-5" />
                  Documents
                </button>
              </nav>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
                Your Activity
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" /> Pending
                  </span>
                  <span className="font-semibold text-slate-900">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-500" /> Approved
                  </span>
                  <span className="font-semibold text-slate-900">0</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-900">
                    Total Consultations
                  </span>
                  <span className="font-bold text-teal-600">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' &&
            <motion.div
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="space-y-6">
              
                {/* Active Request Card */}
                <h2 className="text-lg font-semibold text-slate-900">
                  Active Requests
                </h2>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-slate-900">
                          {MOCK_PATIENT.condition} Treatment
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
                          <Clock className="h-3.5 w-3.5" />
                          {MOCK_PATIENT.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">
                        Submitted: 2 hours ago
                      </p>
                    </div>
                    <button className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1">
                      View Details <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="block text-slate-500 mb-1">
                        Provider
                      </span>
                      <span className="font-medium text-slate-900">
                        Pending Assignment
                      </span>
                    </div>
                    <div>
                      <span className="block text-slate-500 mb-1">
                        Estimated Review
                      </span>
                      <span className="font-medium text-slate-900">
                        24-48 hours
                      </span>
                    </div>
                    <div>
                      <span className="block text-slate-500 mb-1">
                        Consultation Fee
                      </span>
                      <span className="font-medium text-slate-900">
                        $49.00 (Paid)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Medical Summary */}
                <h2 className="text-lg font-semibold text-slate-900 mt-8">
                  Medical Summary
                </h2>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-slate-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">
                          {MOCK_PATIENT.name}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {MOCK_PATIENT.age} years old • {MOCK_PATIENT.sex}
                        </p>
                      </div>
                    </div>

                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-sm">
                      <div>
                        <dt className="text-slate-500 mb-1">
                          Primary Condition
                        </dt>
                        <dd className="font-medium text-slate-900">
                          {MOCK_PATIENT.condition}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-slate-500 mb-1">Duration</dt>
                        <dd className="font-medium text-slate-900">
                          {MOCK_PATIENT.duration}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-slate-500 mb-1">
                          Previous Treatment
                        </dt>
                        <dd className="font-medium text-slate-900">
                          {MOCK_PATIENT.previousTreatment ?
                        `${MOCK_PATIENT.medicationName} (${MOCK_PATIENT.treatmentDuration})` :
                        'None'}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-slate-500 mb-1">
                          Reported Symptoms
                        </dt>
                        <dd className="font-medium text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-100 mt-1">
                          {MOCK_PATIENT.symptoms}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </motion.div>
            }

            {activeTab === 'messages' &&
            <motion.div
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 h-[600px] flex flex-col">
              
                <div className="p-4 border-b border-slate-200 bg-slate-50 rounded-t-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Activity className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Medical Team
                    </h3>
                    <p className="text-xs text-slate-500">
                      Typically replies within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex-grow p-6 flex flex-col justify-center items-center bg-slate-50/50">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-md text-sm text-slate-600 relative">
                    <p>
                      Your intake form has been received and is currently under
                      review by our medical team. A licensed provider will
                      respond here if they need more information or when your
                      treatment plan is ready.
                    </p>
                    <span className="text-[10px] text-slate-400 absolute bottom-1 right-3">
                      System Message
                    </span>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-200 bg-white rounded-b-xl">
                  <div className="flex gap-2">
                    <input
                    type="text"
                    disabled
                    placeholder="Doctor will respond here after review..."
                    className="flex-grow px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm cursor-not-allowed" />
                  
                    <button
                    disabled
                    className="bg-slate-200 text-slate-400 px-4 py-2.5 rounded-lg cursor-not-allowed flex items-center justify-center">
                    
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            }

            {activeTab === 'documents' &&
            <motion.div
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="space-y-6">
              
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-slate-900">
                      Uploaded Documents
                    </h2>
                    <button className="text-sm font-medium text-teal-600 hover:text-teal-700">
                      Upload New
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 hover:border-teal-300 transition-colors cursor-pointer group">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <FileIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Government ID
                        </h4>
                        <p className="text-xs text-slate-500 mb-2">
                          Uploaded 2 hours ago • 2.4 MB
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                          <CheckCircle2 className="h-3 w-3" /> Verified
                        </span>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-4 flex items-start gap-4 hover:border-teal-300 transition-colors cursor-pointer group">
                      <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                        <FileText className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          Recent Lab Report
                        </h4>
                        <p className="text-xs text-slate-500 mb-2">
                          Uploaded 2 hours ago • 1.1 MB
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          Pending Review
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            }
          </div>
        </div>
      </div>
    </div>);

}