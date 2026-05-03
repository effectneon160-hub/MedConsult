import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import {
  Stethoscope,
  Search,
  Filter,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  User,
  Calendar,
  Activity,
  ChevronRight,
  MessageSquare } from
'lucide-react';
import { MOCK_DOCTOR, PENDING_REQUESTS } from '../utils/mockData';
export function DoctorDashboard() {
  const [requests, setRequests] = useState(PENDING_REQUESTS);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    PENDING_REQUESTS[0]?.id || null
  );
  const [filter, setFilter] = useState('all');
  const selectedPatient = requests.find((p) => p.id === selectedPatientId);
  const handleAction = (action: 'approve' | 'reject' | 'info') => {
    if (!selectedPatientId) return;
    let newStatus = '';
    let toastMsg = '';
    switch (action) {
      case 'approve':
        newStatus = 'Approved';
        toastMsg = 'Treatment plan approved successfully.';
        break;
      case 'reject':
        newStatus = 'Rejected';
        toastMsg = 'Request rejected. Refund initiated.';
        break;
      case 'info':
        newStatus = 'More Info Needed';
        toastMsg = 'Message sent to patient requesting more information.';
        break;
    }
    setRequests((prev) =>
    prev.map((p) =>
    p.id === selectedPatientId ?
    {
      ...p,
      status: newStatus
    } :
    p
    )
    );
    toast.success(toastMsg);
  };
  const formatTimeAgo = (dateString: string) => {
    const diff = Date.now() - new Date(dateString).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours === 1) return '1 hour ago';
    if (hours < 24) return `${hours} hours ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Rejected':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'More Info Needed':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };
  return (
    <div className="flex-grow bg-slate-100 flex flex-col h-[calc(100vh-64px)] overflow-hidden">
      {/* Doctor Header */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-4 flex-shrink-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {MOCK_DOCTOR.name.
              split(' ').
              map((n) => n[0]).
              join('')}
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                {MOCK_DOCTOR.name}
              </h1>
              <p className="text-sm text-slate-500">
                {MOCK_DOCTOR.specialty} • Licensed Provider
              </p>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-8">
            <div className="text-center">
              <span className="block text-2xl font-bold text-slate-900">
                {MOCK_DOCTOR.stats.pending}
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Pending
              </span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-emerald-600">
                {MOCK_DOCTOR.stats.approved}
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Approved
              </span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-rose-600">
                {MOCK_DOCTOR.stats.rejected}
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                Rejected
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="flex-grow flex overflow-hidden max-w-7xl mx-auto w-full">
        {/* Left Panel - Patient List */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white border-r border-slate-200 flex flex-col h-full flex-shrink-0">
          <div className="p-4 border-b border-slate-200">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search patients..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                
                All
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${filter === 'pending' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                
                Pending
              </button>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {requests.map((patient) =>
            <div
              key={patient.id}
              onClick={() => setSelectedPatientId(patient.id)}
              className={`p-4 border-b border-slate-100 cursor-pointer transition-colors ${selectedPatientId === patient.id ? 'bg-teal-50 border-l-4 border-l-teal-600' : 'hover:bg-slate-50 border-l-4 border-l-transparent'}`}>
              
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {patient.name}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {formatTimeAgo(patient.submittedAt)}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-2 truncate">
                  {patient.condition}
                </p>
                <span
                className={`inline-flex px-2 py-0.5 rounded text-[10px] font-medium border ${getStatusColor(patient.status)}`}>
                
                  {patient.status}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Patient Detail */}
        <div className="hidden md:flex flex-col flex-grow bg-slate-50 h-full overflow-hidden">
          {selectedPatient ?
          <>
              {/* Detail Header */}
              <div className="bg-white px-8 py-6 border-b border-slate-200 flex-shrink-0">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-slate-900">
                        {selectedPatient.name}
                      </h2>
                      <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedPatient.status)}`}>
                      
                        {selectedPatient.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" /> {selectedPatient.sex},{' '}
                        {selectedPatient.age} yrs
                      </span>
                      <span className="flex items-center gap-1">
                        <Activity className="h-4 w-4" />{' '}
                        {selectedPatient.condition}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> Submitted{' '}
                        {formatTimeAgo(selectedPatient.submittedAt)}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {selectedPatient.status === 'Under Review' &&
                <div className="flex gap-3">
                      <button
                    onClick={() => handleAction('reject')}
                    className="px-4 py-2 bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
                    
                        <XCircle className="h-4 w-4" /> Reject
                      </button>
                      <button
                    onClick={() => handleAction('info')}
                    className="px-4 py-2 bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
                    
                        <MessageSquare className="h-4 w-4" /> Request Info
                      </button>
                      <button
                    onClick={() => handleAction('approve')}
                    className="px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
                    
                        <CheckCircle2 className="h-4 w-4" /> Approve Treatment
                      </button>
                    </div>
                }
                </div>
              </div>

              {/* Detail Content */}
              <div className="flex-grow overflow-y-auto p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Medical Intake Form Data */}
                  <section>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-slate-400" /> Intake
                      Assessment
                    </h3>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                      <div className="grid grid-cols-2 divide-x divide-slate-100">
                        <div className="p-6 space-y-6">
                          <div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                              Primary Condition
                            </h4>
                            <p className="text-slate-900 font-medium">
                              {selectedPatient.condition}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                              Duration
                            </h4>
                            <p className="text-slate-900">
                              {selectedPatient.duration}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                              Previous Treatment
                            </h4>
                            {selectedPatient.previousTreatment ?
                          <p className="text-slate-900">
                                {selectedPatient.medicationName} (
                                {selectedPatient.treatmentDuration})
                              </p> :

                          <p className="text-slate-900">None reported</p>
                          }
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                            Reported Symptoms
                          </h4>
                          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 leading-relaxed">
                            {selectedPatient.symptoms}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Documents */}
                  <section>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-slate-400" /> Attached
                      Documents
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between group cursor-pointer hover:border-teal-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <User className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              Government ID
                            </p>
                            <p className="text-xs text-slate-500">
                              Verified • 2.4 MB
                            </p>
                          </div>
                        </div>
                        <button className="text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          View
                        </button>
                      </div>

                      {selectedPatient.condition !== 'Hair Loss' &&
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between group cursor-pointer hover:border-teal-300 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                              <Activity className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">
                                Recent Lab Results
                              </p>
                              <p className="text-xs text-slate-500">
                                PDF • 1.1 MB
                              </p>
                            </div>
                          </div>
                          <button className="text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            View
                          </button>
                        </div>
                    }
                    </div>
                  </section>
                </div>
              </div>
            </> :

          <div className="flex-grow flex flex-col items-center justify-center text-slate-400">
              <Stethoscope className="h-16 w-16 mb-4 opacity-20" />
              <p className="text-lg font-medium text-slate-500">
                Select a patient to review their case
              </p>
            </div>
          }
        </div>
      </div>
    </div>);

}